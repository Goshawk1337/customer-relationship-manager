import Example from "@/components/ui/kanban"
export default async function DealsPage() {
    return (
        <div className="w-full h-screen flex flex-col p-8 gap-5 overflow-x-hidden">
            <h1 className="text-3xl font-semibold">Deals Page</h1>
            <div className="flex flex-row">
                <Example />
            </div>
        </div>
    )
}