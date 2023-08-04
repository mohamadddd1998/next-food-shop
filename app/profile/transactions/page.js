import Sidebar from "@/components/profile/Sidebar"
import Transactions from "@/components/profile/Transactions";

const TransactionPage = () => {
  return (
    <section className="profile_section layout_padding">
      <div className="container">
        <div className="row">
          <Sidebar />
          <Transactions />
        </div>
      </div>
    </section>
  );
};
export default TransactionPage;
