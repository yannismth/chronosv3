import { DollarSign, User, CreditCard, Activity, icons } from "lucide-react";
const dashboarddata = [
    {
        title: "Total revenue",
        icon: DollarSign,
        montant: "45,231.89",
        percent:"+20.1% from last month"
    },
    {
        title:"Subscriptions",
        icon: User,
        montant:"+2350",
        percent:"+180.1% from last month"

    },
    {
        title:"Sales",
        icon:CreditCard,
        montant:"+12,234",
        percent:"+19% from last month"
    },
    {
        title:"Active now",
        icon:Activity,
        montant:"+573",
        percent:"+201 since last hour"
    }
]

export default dashboarddata