export function fetchClients() {
    // Mock data only, replace it with real DB logic
    return [
        {
            id: 1,
            name: "Client A",
            avatar: "https://ui-avatars.com/api/?name=Client+A&background=random",
            company: "Company A",
            email: "contact@companya.com",
            phone: "+1 (555) 111-0001",
            status: "Active",
            stage: "Opportunity",
            lastContact: "2025-11-20",
            createdAt: "2023-04-01",
            // dealWorth present because stage is Opportunity
            dealWorth: 120000,
            dealWorthFormatted: "$120,000",
        },
        {
            id: 2,
            name: "Client B",
            avatar: "https://ui-avatars.com/api/?name=Client+B&background=random",
            company: "Company B",
            email: "hello@companyb.com",
            phone: "+1 (555) 222-0002",
            status: "Inactive",
            stage: "Lead",
            lastContact: "2025-10-15",
            createdAt: "2022-08-12",
            // no active deal for a Lead
            dealWorth: null,
            dealWorthFormatted: null,
        },
        {
            id: 3,
            name: "Client C",
            avatar: "https://ui-avatars.com/api/?name=Client+C&background=random",
            company: "Company C",
            email: "info@companyc.com",
            phone: "+1 (555) 333-0003",
            status: "Active",
            stage: "Won",
            lastContact: "2025-11-05",
            createdAt: "2021-12-20",
            // deal closed (Won)
            dealWorth: 250000,
            dealWorthFormatted: "$250,000",
        },
        {
            id: 4,
            name: "Client D",
            avatar: "https://ui-avatars.com/api/?name=Client+D&background=random",
            company: "Company D",
            email: "sales@companyd.com",
            phone: "+1 (555) 444-0004",
            status: "Inactive",
            stage: "Lost",
            lastContact: "2025-09-30",
            createdAt: "2020-05-18",
            // lost deal -> explicitly 0
            dealWorth: 0,
            dealWorthFormatted: "$0",
        },
    ]
}


export function fetchLatestClients() {
  // Mock data only, replace it with real DB logic

  return [
    { id: 1, avatar: "", name: "Client A", company: "", lastContact: "2024-06-10" },
    { id: 2, avatar: "", name: "Client B", company: "", lastContact: "2024-06-09" },
    { id: 3, avatar: "", name: "Client C", company: "", lastContact: "2024-06-08" },
    { id: 4, avatar: "", name: "Client D", company: "", lastContact: "2024-06-07" },
    { id: 5, avatar: "", name: "Client E", company: "", lastContact: "2024-06-07" },
  ]
}

export function fetchPipeline() {
  // Mock data only, replace it with real DB logic
  return {
    lead: 32,
    contacted: 18,
    proposal: 9,
    negotiation: 5,
    won: 11,
  }
}

export function fetchClientById(id: number) {
    const clients = fetchClients()

    return clients.find((client) => client.id === id) ?? null
}