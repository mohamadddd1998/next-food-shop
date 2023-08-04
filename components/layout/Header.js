"use client"
import { clearCartAction } from "@/Redux/cart/actionCreators"
import AuthContext from "@/context/AuthCotext"
import { numberOfCart } from "@/lib/helper"
import HeroImage from "@/public/images/hero-bg2.jpg"
import Image from "next/legacy/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import HeroBanner from "@/public/images/hero-banner.png"

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const cartItems = useSelector((store) => store)
  const pathname = usePathname()
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const dispatch = useDispatch()
  return (
    <div className={pathname !== "/" ? "sub_page" : ""}>
      <div className="hero_area">
        <div className="bg-box">
          <Image
            src={HeroImage}
            alt="hero-bg"
            placeholder="blur"
            layout="fill"
          />
        </div>
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" href={"/"}>
                <span>Mohamad-Mirzaei</span>
              </Link>

              <button
                onClick={handleToggle}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                style={{
                  display: toggle ? "block" : "none",
                }}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li
                    className={
                      pathname === "/" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href={"/"}>
                      صفحه ی اصلی
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/menu" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href={"/menu"}>
                      منو محصولات
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/about" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href={"/"}>
                      درباره ی ما
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <Link className="cart_link position-relative" href={"/cart"}>
                    <i className="bi bi-cart-fill text-white fs-5"></i>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill">
                      {numberOfCart(cartItems)}
                    </span>
                  </Link>
                  {user ? (
                    <>
                      <Link href={"/profile"} className="btn-auth">
                        پروفایل
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          dispatch(clearCartAction())
                          localStorage.clear()
                        }}
                        className="btn-auth"
                      >
                        خروج
                      </button>
                    </>
                  ) : (
                    <Link href={"/auth/login"} className="btn-auth">
                      ورود
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </header>
        {pathname === "/" && (
          <div className="container" style={{ zIndex: 100 }}>
            <div className="detail-box-header">
              <h2 className="mb-3 fw-bold">لورم ایپسوم متن ساختگی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <span className="header-order">سفارش دهید</span>
            </div>
          </div>
        )}
        {pathname == "/" && (
          <figure className="HeroBanner">
            <Image src={HeroBanner} layout="fill" />
          </figure>
        )}
      </div>
    </div>
  )
}
export default Header
