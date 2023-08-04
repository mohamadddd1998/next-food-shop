"use client"
import { useState } from "react"
import { GeneralRequestApi } from "@/lib/api"
import contactBanner from "@/public/images/about-banner.png"
import Image from "next/legacy/image"
import takhfifBanner from "@/public/images/sale-shape-red.png"
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    GeneralRequestApi(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/contact-us`,
      { name, email, text, subject },
      setLoading,
      () => {}
    )
  }
  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="row d-flex" style={{ alignItems: "center" }}>
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>نام و نام خانوادگی : </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div>
                <label> ایمیل : </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="form-control"
                  />
                </div>
                <div>
                <label> موضوع پیام : </label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div>
                  <textarea
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    rows="10"
                    style={{ height: "100px" }}
                    className="form-control"
                    placeholder="متن پیام"
                  ></textarea>
                </div>
                <div className="btn_box">
                  <button type="submit" disabled={loading}>
                    ارسال پیام
                    {loading && (
                      <div
                        className="spinner-border spinner-border-sm ms-2"
                        role="status"
                      ></div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6" id="takhfif-banner">
            <figure>
              <Image src={contactBanner} />
            </figure>
            <figure className="takhfif-banner">
              <Image src={takhfifBanner} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
