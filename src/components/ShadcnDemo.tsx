import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
	{ name: "Starter", price: "$0", items: ["One building", "Weekly reports"] },
	{ name: "Pro", price: "$49", items: ["Ten buildings", "Live alerts", "API access"] },
];

export default function ShadcnDemo() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{plans.map((p, i) => (
				<Card key={p.name}>
					<CardHeader>
						<CardTitle>{p.name}</CardTitle>
						<CardDescription>{p.price} per month</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2 text-sm">
							{p.items.map((x) => (
								<li key={x} className="flex items-center gap-2"><Check className="size-4 text-primary" />{x}</li>
							))}
						</ul>
					</CardContent>
					<CardFooter className="gap-2">
						<Button variant={i ? "default" : "outline"}>Choose {p.name} <ArrowRight /></Button>
						<Button variant="ghost">Details</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
