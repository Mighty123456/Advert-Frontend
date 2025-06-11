import { ReactNode, ButtonHTMLAttributes, useRef } from 'react';
import { Loader2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'nav' | 'tab' | 'glass';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  className?: string;
  active?: boolean;
  showArrow?: boolean;
  arrowVariant?: 'default' | 'up-right';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  iconOnly = false,
  className = '',
  active = false,
  disabled,
  showArrow = false,
  arrowVariant = 'default',
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const baseStyles = {
    primary: `relative overflow-hidden bg-primary-500 text-secondary-500 
              hover:bg-primary-400 
              shadow-lg shadow-primary-500/20 
              hover:shadow-primary-500/30 
              transition-all duration-300
              font-semibold`,
    secondary: `relative overflow-hidden bg-secondary-500 text-white 
                hover:bg-navy-light 
                shadow-lg shadow-secondary-500/20 
                hover:shadow-secondary-500/30 
                transition-all duration-300
                font-semibold`,
    outline: `relative overflow-hidden border-2 border-primary-500 text-primary-500 
              hover:bg-primary-500/10 
              hover:border-primary-400 
              hover:text-primary-600 
              transition-all duration-300
              font-semibold`,
    ghost: `relative overflow-hidden text-primary-500 
            hover:bg-primary-500/10 
            transition-all duration-300
            font-medium`,
    link: `relative text-primary-500 
           hover:text-primary-600 
           underline-offset-4 hover:underline 
           transition-all duration-300
           font-medium`,
    nav: `relative text-text-primary 
          hover:bg-primary-500/10 
          hover:text-primary-500
          rounded-lg transition-all duration-300
          font-medium`,
    tab: `relative text-text-primary 
          hover:bg-primary-500/10 
          hover:text-primary-500
          rounded-md transition-all duration-300
          font-medium`,
    glass: `relative overflow-hidden 
            backdrop-blur-lg bg-primary-500/20 border border-primary-500/30
            hover:bg-primary-500/30 hover:border-primary-500/50
            text-white shadow-lg hover:shadow-xl shadow-primary-500/20
            rounded-md transition-all duration-300
            font-medium`,
  };
  
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const activeStyle = active ? `bg-primary-500 text-secondary-500` : '';
  const disabledStyle = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '';

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.98,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    disabled: { 
      scale: 1,
      opacity: 0.7,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    initial: { opacity: 0, x: iconPosition === 'left' ? -10 : 10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      x: iconPosition === 'left' ? -10 : 10,
      transition: { duration: 0.2 }
    }
  };

  const buttonClasses = cn(
    'group inline-flex items-center justify-center transition-all duration-300 rounded-lg whitespace-nowrap',
    'before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000',
    baseStyles[variant],
    sizeStyles[size],
    widthStyle,
    activeStyle,
    disabledStyle,
    className
  );

  const iconClasses = cn(
    iconSizes[size],
    iconPosition === 'left' ? 'mr-2' : 'ml-2',
    iconOnly && 'm-0',
    'transition-transform duration-300',
    iconPosition === 'right' && 'group-hover:translate-x-1',
    iconPosition === 'left' && 'group-hover:-translate-x-1'
  );

  // Ripple effect handler
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'link') return;
    const button = buttonRef.current;
    if (!button) return;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.className = 'ripple-effect';
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        buttonClasses,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      )}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled && !isLoading ? "hover" : undefined}
      whileTap={!disabled && !isLoading ? "tap" : "disabled"}
      disabled={disabled || isLoading}
      aria-label={iconOnly && typeof children === 'string' ? children : undefined}
      onClick={(e) => {
        handleRipple(e);
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      {isLoading ? (
        <Loader2 className={cn(iconSizes[size], 'animate-spin')} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
        <motion.span 
              className={iconClasses}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {icon}
        </motion.span>
      )}
          {!iconOnly && children}
          {icon && iconPosition === 'right' && (
      <motion.span
              className={iconClasses}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {icon}
        </motion.span>
          )}
          {showArrow && !iconOnly && (
            <motion.span
              className={cn(iconClasses, 'ml-2')}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {arrowVariant === 'up-right' ? (
                <ArrowUpRight className={iconSizes[size]} />
              ) : (
                <ArrowRight className={iconSizes[size]} />
              )}
            </motion.span>
          )}
        </>
      )}
    </motion.button>
  );
};

export default Button;