// Phase 5 实现：表单 + Prisma 落库 + Resend 邮件通知
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center pl-[20%]"
    >
      <div className="absolute inset-0 z-10 bg-[#fdf8f0]/35" />
      <h2 className="relative z-20 text-3xl font-semibold text-text">
        Thank you for exploring my portfolio～
      </h2>
      <p className="relative z-20 mt-3 text-text-muted">
        If you are interested, feel free to <strong>Contact me</strong>
      </p>
    </section>
  )
}

export default Contact
