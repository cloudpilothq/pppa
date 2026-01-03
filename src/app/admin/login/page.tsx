"use client";

import { useActionState } from "react";
import { loginAction } from "@/actions/auth";
import { Shield, Lock, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginAction, undefined);

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Admin Portal</h1>
            <p className="text-slate-500 text-sm mt-1">Authorized Personnel Only</p>
        </div>

        {/* Form */}
        <div className="p-8">
            <form action={action} className="space-y-6">
                
                {state?.error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-center gap-2 border border-red-100 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {state.error}
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Access ID</label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="admin@pppa.gov.ng"
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Passcode</label>
                    <div className="relative">
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="••••••••"
                            required
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all pl-12" 
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Verifying...
                        </>
                    ) : (
                        "Access Dashboard"
                    )}
                </button>
            </form>
            
            <p className="mt-8 text-center text-xs text-slate-400">
                Protected by Federal Digital Security Protocols.<br/>
                Unathorized access attempts are logged.
            </p>
        </div>
      </div>
    </div>
  );
}
