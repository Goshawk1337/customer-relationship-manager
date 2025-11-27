import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, MoreHorizontalIcon } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { fetchClients } from "@/dataHandler/handler"


export default async function ClientsPage() {
    return (
        <div className="w-full h-screen flex flex-col p-8 gap-5 overflow-x-hidden">
            <h1 className="text-3xl font-semibold">Clients Page</h1>
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <Select>
                    <SelectTrigger className="w-full md:max-w-sm">
                        <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input placeholder="Search clients..." className="w-full md:max-w-sm" />
                <Dialog>
                    
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full md:max-w-sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Client
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Add new client</DialogTitle>
                            <DialogDescription>
                                Fill in the details to create a new client.
                            </DialogDescription>
                        </DialogHeader>

                        <form className="grid gap-4 py-2">
                            <div className="grid grid-cols-1 gap-2">
                                <label className="text-sm">Name</label>
                                <Input name="name" placeholder="Client name" />
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <label className="text-sm">Company</label>
                                <Input name="company" placeholder="Company" />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-2">
                                <div>
                                    <label className="text-sm">Email</label>
                                    <Input name="email" type="email" placeholder="email@company.com" />
                                </div>
                                <div>
                                    <label className="text-sm">Phone</label>
                                    <Input name="phone" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-2">
                                <div>
                                    <label className="text-sm">Status</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="all">All</SelectItem>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="text-sm">Stage</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select stage" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="lead">Lead</SelectItem>
                                                <SelectItem value="opportunity">Opportunity</SelectItem>
                                                <SelectItem value="won">Won</SelectItem>
                                                <SelectItem value="lost">Lost</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm">Deal worth (optional)</label>
                                <Input name="dealWorth" type="number" placeholder="120000" />
                            </div>

                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="ghost">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Create</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>

                </Dialog>
            </div>
            <div className="hidden md:block mt-5">
                <Table>
                    <TableCaption>A list of your clients</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Last Contact</TableHead>
                            <TableHead className="text-right"> Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fetchClients().map((client) => (
                            <TableRow key={client.id} >
                                <TableCell className="font-medium ">{client.name}</TableCell>
                                <TableCell >{client.company}</TableCell>
                                <TableCell  >{client.email}</TableCell>
                                <TableCell  >{client.phone}</TableCell>
                                <TableCell  >{client.status}</TableCell>
                                <TableCell className="text-right">{client.lastContact}</TableCell>
                                <TableCell className="text-right">
                                    <Link href={`/clients/${client.id}`}>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontalIcon />
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
            <div className="md:hidden mt-5 flex flex-col gap-5">
                {fetchClients().map((client) => (
                    <Link key={client.id} href={`/clients/${client.id}`}>
                        <Card className="w-full max-w-sm min-h-36 cursor-pointer">
                            <CardHeader>
                                <CardTitle>{client.name}</CardTitle>
                                <CardContent className="text-primary font-normal text-sm">
                                    company: {client.company} <br />
                                    Email: {client.email} <br />
                                    Phone: {client.phone} <br />
                                    Status: {client.status} <br />
                                    Last Contact: {client.lastContact}
                                </CardContent>
                                <CardFooter className="text-primary font-thin text-xs">tap to edit</CardFooter>
                            </CardHeader>
                        </Card>
                    </Link>

                ))}
            </div>
        </div>
    )
}
