import { TCategoryData } from "@/types/TCategory";
import {
  BaggageClaim,
  Edit3,
  Home,
  Layers3,
  LayoutDashboard,
  PackageOpen,
  ReplaceAll,
  ScrollText,
  SlidersHorizontal,
  Users,
} from "lucide-react";

const Routes = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    title: "Orders",
    link: "/admin/orders",
    icon: <BaggageClaim className="h-6 w-6" />,
  },
  {
    title: "Categories",
    link: "/admin/categorys",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    title: "Create Categories",
    link: "/admin/create-category",
    icon: <Edit3 className="h-6 w-6" />,
  },

  {
    title: "Products",
    link: "/admin/products",
    icon: <PackageOpen className="h-6 w-6" />,
  },
  {
    title: "Create Product",
    link: "/admin/create-product",
    icon: <SlidersHorizontal className="h-6 w-6" />,
  },
  {
    title: "Products Variants",
    link: "/admin/variants",
    icon: <ReplaceAll className="h-6 w-6" />,
  },
  {
    title: "Create Variants",
    link: "/admin/create-variants",
    icon: <ScrollText className="h-6 w-6" />,
  },

  {
    title: "Users",
    link: "/admin/users",
    icon: <Users className="h-6 w-6" />,
  },
];

export default Routes;

export const HomeRoutes = [
  {
    title: "Home",
    link: "/",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "Products",
    link: "/products",
    icon: <PackageOpen className="h-6 w-6" />,
  },
];

export const selectData = (data: TCategoryData[], name: string) => {
  const res = data?.filter(
    (item: { categoryType: string; _id: string }) => item.categoryType === name
  );
  const result = res?.map((item: { slug: string; _id: string }) => ({
    label: item.slug,
    value: item._id,
  }));
  return result
};
