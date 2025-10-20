import type React from "react"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

interface NoticeProps {
  type: "info" | "warning" | "success"
  title: string
  children: React.ReactNode
}

export default function Notice({ type, title, children }: NoticeProps) {
  const icons = {
    info: <Info size={20} className="text-primary flex-shrink-0" />,
    warning: <AlertCircle size={20} className="text-accent flex-shrink-0" />,
    success: <CheckCircle size={20} className="text-green-500 flex-shrink-0" />,
  }

  return (
    <div className={`notice ${type}`}>
      <div className="flex gap-3">
        {icons[type]}
        <div>
          <h4 className="font-semibold text-sm mb-1">{title}</h4>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  )
}
