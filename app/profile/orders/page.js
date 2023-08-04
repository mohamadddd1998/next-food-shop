import Orders from "@/components/profile/Orders"
import Sidebar from "@/components/profile/Sidebar"

const OrdersPage=()=>{

    return(
        <section className="profile_section layout_padding">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Orders />
          </div>
        </div>
      </section>
    )
}
export default OrdersPage 