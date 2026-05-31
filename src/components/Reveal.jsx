import useInView from '../hooks/useInView'

/**
 * Fades + lifts children into view on scroll (transition-based; reduced-motion safe).
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
