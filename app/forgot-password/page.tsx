"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Mail, Lock, Eye, EyeOff, ArrowLeft, ShieldCheck, Circle } from "lucide-react"
import { Header } from "@/components/header"

type Step = "request" | "verify" | "reset" | "success"

function StrengthBar({ password }: { password: string }) {
    const { translations } = useLanguage()
    const tr = translations?.passwordRecovery

    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    }

    const score = Object.values(checks).filter(Boolean).length
    const strengthLabel = score <= 1 ? tr?.strengthWeak : score === 2 ? tr?.strengthFair : score === 3 ? tr?.strengthGood : tr?.strengthStrong
    const strengthColor = score <= 1 ? "bg-red-500" : score === 2 ? "bg-orange-400" : score === 3 ? "bg-yellow-500" : "bg-green-500"

    return (
        <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{tr?.passwordStrength}</span>
                <span className={`text-xs font-semibold ${score <= 1 ? "text-red-500" : score === 2 ? "text-orange-400" : score === 3 ? "text-yellow-500" : "text-green-500"}`}>
                    {strengthLabel}
                </span>
            </div>
            <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= score ? strengthColor : "bg-border"}`}
                    />
                ))}
            </div>
            <ul className="grid grid-cols-2 gap-1 pt-1">
                {[
                    { key: "length", label: tr?.reqLength },
                    { key: "uppercase", label: tr?.reqUppercase },
                    { key: "number", label: tr?.reqNumber },
                    { key: "special", label: tr?.reqSpecial },
                ].map(({ key, label }) => (
                    <li key={key} className="flex items-center gap-1.5">
                        {checks[key as keyof typeof checks] ? (
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500" />
                        ) : (
                            <Circle className="h-3.5 w-3.5 shrink-0 text-border" />
                        )}
                        <span className={`text-xs ${checks[key as keyof typeof checks] ? "text-foreground" : "text-muted-foreground"}`}>
                            {label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function PasswordRecoveryPage() {
    const { translations } = useLanguage()
    const [step, setStep] = useState<Step>("request")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""])
    const [temCode, settemCode] = useState<string[]>(["", "", "", "", "", ""])
    const [showSendCode, setShowSendCode] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [countdown, setCountdown] = useState(0)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const tr = translations?.passwordRecovery

    // countdown timer for resend
    useEffect(() => {
        if (countdown <= 0) return

        const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
        return () => clearTimeout(timer)

    }, [countdown])

    async function handleSendCode(e: React.FormEvent) {
        e.preventDefault()
        e.stopPropagation()

        const newCode = generateCode()
        settemCode(newCode)

        console.log({ newCode });
        const data = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify({
                email,
                code: newCode.join("")
            })
        }).then(res => res.json())

        console.log({ data });

        setCountdown(60)
        setStep("verify")
    }

    function generateCode() {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10).toString())
    }

    function handleCodeInput(index: number, value: string) {
        if (!/^[0-9]?$/.test(value)) return

        const next = [...code]
        next[index] = value

        setCode(next)

        if (value && index < 5)
            inputRefs.current[index + 1]?.focus()

        setShowSendCode(temCode.join("") === next.join(""))
    }

    function handleCodeKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    function handleCodePaste(e: React.ClipboardEvent) {
        e.preventDefault()

        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
        const next = [...code]

        pasted.split("").forEach((char, i) => { next[i] = char })
        setCode(next)

        inputRefs.current[Math.min(pasted.length, 5)]?.focus()
    }

    function handleVerify(e: React.FormEvent) {
        e.preventDefault()
        setStep("reset")
    }

    function handleReset(e: React.FormEvent) {
        e.preventDefault()
        setStep("success")
    }

    const passwordsMatch = newPassword === confirmPassword && confirmPassword.length > 0

    if (!tr) return null

    return (
        <div>
            <Header recovery={true} />
            <div className="flex flex-col mt-30 bg-background">
                <div className="flex flex-1 flex-col items-center justify-center px-6 sm:px-10 lg:px-16">
                    <div className="w-full max-w-md">

                        {/* ── STEP 1: Request ── */}
                        {step === "request" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="mb-8">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                        <Mail className="h-7 w-7 text-primary" />
                                    </div>
                                    <h1 className="font-serif text-3xl font-bold text-foreground">{tr.requestTitle}</h1>
                                    <p className="mt-2 text-muted-foreground">{tr.requestDescription}</p>
                                </div>

                                <form onSubmit={handleSendCode} className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{tr.emailLabel}</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={tr.emailPlaceholder}
                                            className="h-12 text-base"
                                        />
                                    </div>
                                    <Button type="submit" className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold">
                                        {tr.sendCode}
                                    </Button>
                                </form>

                                <div className="mt-6 text-center">
                                    <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                                        <ArrowLeft className="h-4 w-4" />
                                        {tr.backToLogin}
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* ── STEP 2: Verify ── */}
                        {step === "verify" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="mb-8">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                        <ShieldCheck className="h-7 w-7 text-primary" />
                                    </div>
                                    <h1 className="font-serif text-3xl font-bold text-foreground">{tr.verifyTitle}</h1>
                                    <p className="mt-2 text-muted-foreground">
                                        {tr.verifyDescription}{" "}
                                        <span className="font-semibold text-foreground">{email}</span>
                                        <br />
                                        {tr.verifySubDescription}
                                    </p>
                                </div>

                                <form onSubmit={handleVerify} className="space-y-6">
                                    <div className="space-y-3">
                                        <Label>{tr.codeLabel}</Label>
                                        <div className="flex gap-2 sm:gap-3" onPaste={handleCodePaste}>
                                            {code.map((digit, i) => (
                                                <input
                                                    key={i}
                                                    ref={(el) => { inputRefs.current[i] = el }}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) => handleCodeInput(i, e.target.value)}
                                                    onKeyDown={(e) => handleCodeKeyDown(i, e)}
                                                    className="h-14 w-full rounded-xl border-2 border-border bg-background text-center text-xl font-bold text-foreground transition-all focus:border-primary focus:outline-none focus:ring-0"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={!showSendCode}
                                        className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold disabled:opacity-50"
                                    >
                                        {tr.verifyCode}
                                    </Button>
                                </form>

                                <div className="mt-6 flex flex-col items-center gap-2 text-center">
                                    {countdown > 0 ? (
                                        <p className="text-sm text-muted-foreground">
                                            {tr.resendIn} <span className="font-semibold text-foreground">{countdown}</span> {tr.seconds}
                                        </p>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => { setCountdown(60); setCode(["", "", "", "", "", ""]) }}
                                            className="text-sm font-medium text-primary hover:underline"
                                        >
                                            {tr.resendCode}
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => setStep("request")}
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        {tr.changeEmail}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ── STEP 3: Reset ── */}
                        {step === "reset" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="mb-8">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                        <Lock className="h-7 w-7 text-primary" />
                                    </div>
                                    <h1 className="font-serif text-3xl font-bold text-foreground">{tr.resetTitle}</h1>
                                    <p className="mt-2 text-muted-foreground">{tr.resetDescription}</p>
                                </div>

                                <form onSubmit={handleReset} className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="new-password">{tr.newPasswordLabel}</Label>
                                        <div className="relative">
                                            <Input
                                                id="new-password"
                                                type={showPassword ? "text" : "password"}
                                                required
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder={tr.newPasswordPlaceholder}
                                                className="h-12 pr-12 text-base"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            >
                                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                        {newPassword && <StrengthBar password={newPassword} />}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">{tr.confirmPasswordLabel}</Label>
                                        <div className="relative">
                                            <Input
                                                id="confirm-password"
                                                type={showConfirm ? "text" : "password"}
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder={tr.confirmPasswordPlaceholder}
                                                className={`h-12 pr-12 text-base ${confirmPassword && !passwordsMatch ? "border-destructive focus-visible:ring-destructive" : confirmPassword && passwordsMatch ? "border-green-500" : ""}`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirm(!showConfirm)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            >
                                                {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                        {confirmPassword && passwordsMatch && (
                                            <p className="flex items-center gap-1.5 text-xs text-green-600">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                Las contrasenas coinciden
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={!passwordsMatch || newPassword.length < 8}
                                        className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold disabled:opacity-50"
                                    >
                                        {tr.setPassword}
                                    </Button>
                                </form>
                            </div>
                        )}

                        {/* ── STEP 4: Success ── */}
                        {step === "success" && (
                            <div className="animate-in fade-in zoom-in-95 duration-300 text-center">
                                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                                </div>
                                <h1 className="font-serif text-3xl font-bold text-foreground">{tr.successTitle}</h1>
                                <p className="mt-3 text-muted-foreground">{tr.successDescription}</p>
                                <Button
                                    asChild
                                    className="mt-8 h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
                                >
                                    <Link href="https://student.caribia.edu.do/login/index.php">{tr.goToLogin}</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
