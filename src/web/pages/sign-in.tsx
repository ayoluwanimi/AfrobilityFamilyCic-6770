import { useForm } from 'react-hook-form';
import { useLocation, Link } from 'wouter';
import { authClient } from '../lib/auth';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SignInForm {
  email: string;
  password: string;
}

export default function SignIn() {
  const [, setLocation] = useLocation();
  const [error, setAuthError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

  const onSubmit = async (data: SignInForm) => {
    setAuthError(null);
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setAuthError(error.message || 'Sign in failed');
      return;
    }

    setLocation('/admin');
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 shadow-2xl">
        <div className="text-center">
          <Link href="/">
            <h1 className="text-3xl font-serif text-white mb-2 cursor-pointer hover:text-mustard transition-colors">Afrobility</h1>
          </Link>
          <p className="text-gray-400 font-sans">Admin Portal Login</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full bg-[#2A2A2A] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-all"
                placeholder="staff@afrobility.org"
              />
            </div>

            <div>
              <label htmlFor="password" title="Password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full bg-[#2A2A2A] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-mustard/50 focus:border-mustard transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-mustard hover:bg-mustard/90 text-charcoal font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In to Dashboard'}
          </Button>

          <div className="text-center text-sm text-gray-500 pt-4">
             United in Care • Afrobility Family CIC
          </div>
        </form>
      </div>
    </div>
  );
}
