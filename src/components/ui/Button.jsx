import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 shadow-lg shadow-cyan-500/20 focus:ring-cyan-500",
                secondary: "bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500",
                success: "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:brightness-110 shadow-lg shadow-emerald-500/20 focus:ring-emerald-500",
                outline: "border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-700/50 hover:text-white focus:ring-slate-500",
                destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:brightness-110 shadow-lg shadow-red-500/20 focus:ring-red-500",
                ghost: "bg-transparent text-slate-400 hover:bg-slate-700/30 hover:text-white",
            },
            size: {
                default: "px-6 py-3 text-sm",
                sm: "px-3 py-2 text-sm",
                lg: "px-8 py-4 text-base",
                icon: "p-2",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';

    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    );
});

Button.displayName = "Button";

export { Button, buttonVariants };
