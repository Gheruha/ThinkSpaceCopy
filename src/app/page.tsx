import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Main() {
	return (
		<div id="MainDashboard-div" className="w-full h-[100vh] p-4">
			<div id="LogOut-div" className="fixed">
				<form action="/auth/backend/routes/logout" method="post">
					<Button size="xs" className="rounded-sm" variant="outline">
						<span className="text-lg font-normal">Log Out</span>
					</Button>
				</form>
			</div>

			<div id="Dashboard-div" className="flex w-full h-full justify-center items-center">
				<Link href="/workspace">
					<Card className="hover:bg-accent hover:text-accent-foreground transition-hover duration-75">
						<CardHeader>
							<CardTitle>Workspace</CardTitle>
							<CardDescription>Enter your full workspace and start to organize!</CardDescription>
						</CardHeader>
						<CardContent></CardContent>
					</Card>
				</Link>
			</div>
		</div>
	);
}
