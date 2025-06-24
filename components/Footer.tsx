import { Github, Instagram, Twitter } from "lucide-react"

const footerLinks = [
  { href: "#services", label: "Serviços" },
  { href: "#projects", label: "Portfólio" },
  { href: "#contact", label: "Contato" },
]

const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">João</h3>
            <p className="text-primary-foreground/80">Desenvolvedor Frontend</p>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© João. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
