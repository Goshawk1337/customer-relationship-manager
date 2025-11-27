"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import StarterKitExample from "@/components/ui/tiptap";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Star } from "lucide-react";

type ClientProp = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  stage?: string;
  status?: string;
  createdAt?: string | null;
  // ...other fields if needed
};

export default function ClientDetails({ client }: { client: ClientProp }) {
  const [meetingLog, setMeetingLog] = React.useState<string>('');

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(client?.name ?? "");
  const [email, setEmail] = useState(client?.email ?? "");
  const [phone, setPhone] = useState(client?.phone ?? "");
  const [company, setCompany] = useState(client?.company ?? "");
  const [stage, setStage] = useState(client?.stage ?? "");
  const [status, setStatus] = useState(client?.status ?? "");
  const createdAtDisplay = client?.createdAt
    ? new Date(client.createdAt).toISOString().slice(0, 10).replace(/-/g, ".")
    : "";

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-evenly  ">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-row gap-5">
          <h1 className="text-xl font-semibold">Client Details</h1>
          <div className="flex items-start mt-2">
            <div className="flex items-center gap-2">
              <Switch checked={editMode} onCheckedChange={(val) => setEditMode(Boolean(val))} />
              <span className="text-sm font-bold">Edit Mode</span>
            </div>
          </div>
        </div>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Name</span>
          <Input disabled={!editMode} value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Email</span>
          <Input disabled={!editMode} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Phone</span>
          <Input disabled={!editMode} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Company</span>
          <Input disabled={!editMode} value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Created</span>
          <Input disabled value={createdAtDisplay} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Tags (VIP, Lead, Returning)</span>
          <Select defaultValue={stage} value={stage} onValueChange={(v) => setStage(v)} disabled={!editMode}>
            <SelectTrigger className="w-full  px-3 py-2 text-sm">
              <SelectValue placeholder="Select tags" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="VIP">VIP</SelectItem>
              <SelectItem value="Lead">Lead</SelectItem>
              <SelectItem value="Returning">Returning</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Status (Active, Inactive)</span>
          <Select defaultValue={status} value={status} onValueChange={(v) => setStatus(v)} disabled={!editMode}>
            <SelectTrigger className="w-full  px-3 py-2 text-sm">
              <SelectValue placeholder="Select tags" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="VIP">Active</SelectItem>
              <SelectItem value="Lead">Inactive</SelectItem>
             </SelectContent>
          </Select>
        </label>
      </div>
      <Separator orientation="horizontal" className="my-8 md:hidden" />
      <Separator orientation="vertical" className="mx-8 md:block hidden" />
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-xl font-semibold ">Meeting Logs</h1>

        <StarterKitExample />

      </div>
    </div>

  );
}