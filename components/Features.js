import Image from "next/legacy/image"
import promo_1 from "@/public/images/promo-1.png"
import promo_2 from "@/public/images/promo-2.png"
import promo_3 from "@/public/images/promo-3.png"
import promo_4 from "@/public/images/promo-4.png"

const Features = () => {
  return (
    <section className="card-area layout_padding">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="card text-center card-support">
              <div className="card-body card-support-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-telephone fs-2  card-icon"></i>
                </div>
                <p className="card-text fw-bold">لورم ایپسوم متن ساختگی</p>
                <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.{" "}
                </p>
                <figure>
                  <Image src={promo_1} width={180} height={180} />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="card text-center card-support">
              <div className="card-body card-support-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-clock fs-2  card-icon"></i>
                </div>
                <p className="card-text fw-bold">لورم ایپسوم متن ساختگی</p>
                <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.{" "}
                </p>
                <figure>
                  <Image src={promo_2} width={180} height={180} />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="card text-center card-support">
              <div className="card-body card-support-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-geo-alt fs-2  card-icon"></i>
                </div>
                <p className="card-text fw-bold">لورم ایپسوم متن ساختگی</p>
                <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.{" "}
                </p>
                <figure>
                  <Image src={promo_3} width={180} height={180} />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="card text-center card-support">
              <div className="card-body card-support-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-telephone fs-2  card-icon"></i>
                </div>
                <p className="card-text fw-bold">لورم ایپسوم متن ساختگی</p>
                <p className="card-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.{" "}
                </p>
                <figure>
                  <Image src={promo_4} width={180} height={180} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
