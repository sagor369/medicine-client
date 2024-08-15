import CartTable from "@/components/pages/addToCartcomponent/CartTable";
import OrderSummery from "@/components/pages/addToCartcomponent/OrderSummery";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex justify-between">
      <CartTable />
      <div className="w-1/4">
        <OrderSummery />
      </div>
    </div>
  );
}
