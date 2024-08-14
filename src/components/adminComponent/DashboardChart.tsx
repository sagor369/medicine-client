"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", user: 186, products: 80, orders: 45 },
  { month: "February", user: 305, products: 200, orders: 100 },
  { month: "March", user: 237, products: 120, orders: 150 },
  { month: "April", user: 73, products: 190, orders: 50 },
  { month: "May", user: 209, products: 130, orders: 100 },
  { month: "June", user: 214, products: 140, orders: 160 },
]
const chartConfig = {
  user: {
    label: "User",
    color: "hsl(var(--chart-1))",
  },
  products: {
    label: "Products",
    color: "hsl(var(--chart-2))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const DashboardChart = () => {
  
  return (
    <Card>
    <CardHeader>
      <CardTitle>Monthly Site Chart</CardTitle>
      <CardDescription>
        Showing total visitors Order Product and User last 6months
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
          }}
          stackOffset="expand"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="orders"
            type="natural"
            fill="var(--color-orders)"
            fillOpacity={1}
            stroke="var(--color-orders)"
            stackId="a"
          />
          <Area
            dataKey="products"
            type="natural"
            fill="var(--color-products)"
            fillOpacity={0.4}
            stroke="var(--color-products)"
            stackId="a"
          />
          <Area
            dataKey="user"
            type="natural"
            fill="var(--color-user)"
            fillOpacity={0.4}
            stroke="var(--color-user)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </CardContent>
  </Card>
  );
};

export default DashboardChart;
