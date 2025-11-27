import { fetchClientById } from "@/dataHandler/handler";
import { notFound } from "next/navigation";
import ClientDetails from "../clientDetails";
import { Separator } from "@/components/ui/separator";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }
  const client = await fetchClientById(parseInt(slug));
  if (!client) {
    return notFound();
  }

  // Ensure props are serializable for the client component
  const clientData = {
    ...client,
    createdAt: client?.createdAt ? new Date(client.createdAt).toISOString() : null,
  };

  return (
    <div className="w-full h-screen flex flex-col p-12 gap-5 overflow-x-hidden">
      <div>
        <h1 className="text-3xl font-semibold">{client?.name}</h1>
        <p className="font-thin text-sm">{client?.company}</p>
      </div >

      <div>
        <ClientDetails client={clientData} />

      </div>
    </div>
  );
}