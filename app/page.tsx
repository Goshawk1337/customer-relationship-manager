

"use server"
import { DollarSign, DoorClosed, Handshake, User, Users } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
function fetchPipeline() {
  // Mock data only, replace it with real DB logic
  return {
    lead: 32,
    contacted: 18,
    proposal: 9,
    negotiation: 5,
    won: 11,
  }
}
function fetchLatestClients() {
  // Mock data only, replace it with real DB logic

  return [
    { id: 1, avatar: "", name: "Client A", company: "", lastContact: "2024-06-10" },
    { id: 2, avatar: "", name: "Client B", company: "", lastContact: "2024-06-09" },
    { id: 3, avatar: "", name: "Client C", company: "", lastContact: "2024-06-08" },
    { id: 4, avatar: "", name: "Client D", company: "", lastContact: "2024-06-07" },
    { id: 5, avatar: "", name: "Client E", company: "", lastContact: "2024-06-07" },
  ]
}

const pipelineItems = [
  { id: "lead", name: "Lead", count: fetchPipeline().lead, description: "New potential customers awaiting qualification." },
  { id: "contacted", name: "Contacted", count: fetchPipeline().contacted, description: "Initial outreach made — waiting for response or follow-up." },
  { id: "proposal", name: "Proposal", count: fetchPipeline().proposal, description: "Proposal sent to the client, pending approval." },
  { id: "negotiation", name: "Negotiation", count: fetchPipeline().negotiation, description: "Pricing and terms are being negotiated." },
  { id: "won", name: "Won", count: fetchPipeline().won, description: "Deals closed and revenue recognized." },
]

export default async function Home() {

  return (
    // important statistics
    <div className="w-full h-screen flex flex-col p-12 gap-5">
      <h1 className="text-3xl font-semibold">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="w-full max-w-sm min-h-36">
          <CardHeader>
            <CardTitle>Total Clients</CardTitle>
            <CardDescription className="text-primary text-2xl">
              150 <Users className="inline-block ml-2 mb-1" />
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full max-w-sm min-h-36">
          <CardHeader>
            <CardTitle>Active Deals</CardTitle>
            <CardDescription className="text-primary text-2xl">
              32 <Handshake className="inline-block ml-2 mb-1" />
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm min-h-36">
          <CardHeader>
            <CardTitle>Closed Won</CardTitle>
            <CardDescription className="text-primary flex-row text-2xl">
              11 <DoorClosed className="inline-block ml-2 mb-1" />
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm min-h-36">
          <CardHeader>
            <CardTitle>Revenue - This month</CardTitle>
            <CardDescription className="text-primary text-2xl">
              3220 <DollarSign className="inline-block ml-2 mb-1" />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Separator />

      {/* detailed sections about the five latest clients, and current leads, and deals */}


      <div className="w-full flex flex-col md:flex-row items-stretch mt-3 gap-5">
        <div className="w-full md:flex-1">
          <h1 className="text-2xl font-semibold">Latest Clients</h1>
          {fetchLatestClients().map((client) => {
            const initials = client.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <Item key={client.id} className="mt-3 md:p-3" variant="outline">
                <ItemMedia>
                  <Avatar className="h-10 w-10">
                    {client.avatar ? (
                      <AvatarImage src={client.avatar} alt={client.name} />
                    ) : (
                      <AvatarFallback>{initials}</AvatarFallback>
                    )}
                  </Avatar>
                </ItemMedia>

                <ItemContent>
                  <ItemTitle>{client.name}</ItemTitle>
                  <ItemDescription>
                    <span className="block text-sm">Company: {client.company || "—"}</span>
                    <span className="block text-sm">Last contacted: {client.lastContact}</span>
                  </ItemDescription>
                </ItemContent>
              </Item>
            );
          })}  </div>

        <Separator orientation="vertical" className="hidden md:block md:mx-8" />
        <Separator orientation="horizontal" className=" md:hidden my-8" />


        <div className="w-full md:flex-1">
          <h1 className="text-2xl font-semibold">Pipeline Summary</h1>
          <div className="flex flex-col w-full ">
            {pipelineItems.map((stage) => {
              return (
                <Item key={stage.id} className="mt-3 md:p-[1.1rem]" variant="outline">
                  <ItemContent>
                    <div className="flex justify-between items-center w-full">
                      <ItemTitle>{stage.name}</ItemTitle>
                      <span className="text-lg font-medium">{stage.count}</span>
                    </div>
                    <ItemDescription>
                      <span className="block text-sm text-muted-foreground">{stage.description}</span>
                    </ItemDescription>
                  </ItemContent>
                </Item>
              );
            })}
          </div>
        </div>  </div>  </div>
  );
}
