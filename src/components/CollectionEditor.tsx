import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import type { SiteData } from "../types/platform";

type CollectionKey = "services" | "staff" | "events" | "testimonials" | "faqs" | "gallery" | "posts" | "media";

const collectionLabels: Array<{ id: CollectionKey; label: string }> = [
  { id: "services", label: "Services" },
  { id: "staff", label: "Team" },
  { id: "events", label: "Events" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faqs", label: "FAQs" },
  { id: "gallery", label: "Gallery" },
  { id: "posts", label: "Blog" },
  { id: "media", label: "Media library" },
];

export function CollectionEditor({ site, setSite }: { site: SiteData; setSite: (site: SiteData) => void }) {
  const [active, setActive] = useState<CollectionKey>("services");
  const items = (site[active] || []) as unknown as Array<{ id: string; [key: string]: string }>;

  const updateItem = (id: string, changes: Record<string, string | boolean>) =>
    setSite({ ...site, [active]: items.map((item) => item.id === id ? { ...item, ...changes } : item) });

  const removeItem = (id: string) =>
    setSite({ ...site, [active]: items.filter((item) => item.id !== id) });

  const addItem = () => {
    const id = `${active}-${Date.now()}`;
    const defaults = {
      services: { id, title: "New service", description: "Describe what you offer.", price: "", category: "General", imageUrl: "", featured: false },
      staff: { id, name: "New team member", role: "Role", bio: "Add a short introduction.", email: "", imageUrl: "" },
      events: { id, title: "New event", date: "", time: "", location: "", description: "Add event details.", category: "General", registrationOpen: true },
      testimonials: { id, quote: "Add a short customer or community quote.", name: "Name", role: "" },
      faqs: { id, question: "New question", answer: "Add a clear, helpful answer." },
      gallery: { id, title: "New image", imageUrl: "", altText: "" },
      posts: { id, title: "New article", excerpt: "Add a short summary.", author: "", publishedDate: "", imageUrl: "" },
      media: { id, name: "New image", url: "", altText: "", usage: "General website image" },
    }[active];
    setSite({ ...site, [active]: [...items, defaults] });
  };

  return (
    <div className="collection-editor">
      <div className="collection-heading">
        <span>Site content</span>
        <p>Update reusable information once and it will stay consistent wherever it appears.</p>
      </div>
      <label className="collection-choice">
        What would you like to update?
        <select value={active} onChange={(event) => setActive(event.target.value as CollectionKey)}>
          {collectionLabels.map((collection) => <option value={collection.id} key={collection.id}>{collection.label}</option>)}
        </select>
      </label>
      <div className="collection-items">
        {active === "media" && <div className="media-guidance"><strong>Image guide</strong><p>Use JPG or WebP for photos and PNG for graphics. Aim for under 500 KB. Hero images work best at 1600 × 900; cards at 800 × 600. Always describe meaningful images.</p></div>}
        {items.length === 0 && <div className="collection-empty"><strong>No items yet</strong><p>Add the first one when you are ready.</p></div>}
        {items.map((item, index) => (
          <article className="collection-item" key={item.id}>
            <div className="collection-item-title"><strong>{collectionLabels.find((entry) => entry.id === active)?.label} {index + 1}</strong><button onClick={() => removeItem(item.id)} aria-label={`Delete item ${index + 1}`}><Trash2 size={14} /></button></div>
            {active === "services" && <>
              <Field label="Name" value={item.title} onChange={(value) => updateItem(item.id, { title: value })} />
              <Area label="Description" value={item.description} onChange={(value) => updateItem(item.id, { description: value })} />
              <Field label="Price or note" value={item.price} onChange={(value) => updateItem(item.id, { price: value })} />
              <Field label="Image link" value={item.imageUrl} onChange={(value) => updateItem(item.id, { imageUrl: value })} placeholder="https://…" />
            </>}
            {active === "staff" && <>
              <Field label="Name" value={item.name} onChange={(value) => updateItem(item.id, { name: value })} />
              <Field label="Role" value={item.role} onChange={(value) => updateItem(item.id, { role: value })} />
              <Area label="Short bio" value={item.bio} onChange={(value) => updateItem(item.id, { bio: value })} />
              <Field label="Email" value={item.email} onChange={(value) => updateItem(item.id, { email: value })} />
              <Field label="Photo link" value={item.imageUrl} onChange={(value) => updateItem(item.id, { imageUrl: value })} placeholder="https://…" />
            </>}
            {active === "events" && <>
              <Field label="Event name" value={item.title} onChange={(value) => updateItem(item.id, { title: value })} />
              <Field label="Date" value={item.date} onChange={(value) => updateItem(item.id, { date: value })} />
              <Field label="Time" value={item.time} onChange={(value) => updateItem(item.id, { time: value })} />
              <Field label="Location" value={item.location} onChange={(value) => updateItem(item.id, { location: value })} />
              <Area label="Description" value={item.description} onChange={(value) => updateItem(item.id, { description: value })} />
            </>}
            {active === "testimonials" && <>
              <Area label="Quote" value={item.quote} onChange={(value) => updateItem(item.id, { quote: value })} />
              <Field label="Person's name" value={item.name} onChange={(value) => updateItem(item.id, { name: value })} />
              <Field label="Role or organization" value={item.role} onChange={(value) => updateItem(item.id, { role: value })} />
            </>}
            {active === "faqs" && <>
              <Field label="Question" value={item.question} onChange={(value) => updateItem(item.id, { question: value })} />
              <Area label="Answer" value={item.answer} onChange={(value) => updateItem(item.id, { answer: value })} />
            </>}
            {active === "gallery" && <>
              <Field label="Image title" value={item.title} onChange={(value) => updateItem(item.id, { title: value })} />
              <Field label="Image link" value={item.imageUrl} onChange={(value) => updateItem(item.id, { imageUrl: value })} placeholder="https://…" />
              <Field label="Image description" value={item.altText} onChange={(value) => updateItem(item.id, { altText: value })} placeholder="Describe the image for visitors who cannot see it" />
            </>}
            {active === "posts" && <>
              <Field label="Article title" value={item.title} onChange={(value) => updateItem(item.id, { title: value })} />
              <Area label="Short summary" value={item.excerpt} onChange={(value) => updateItem(item.id, { excerpt: value })} />
              <Field label="Author" value={item.author} onChange={(value) => updateItem(item.id, { author: value })} />
              <Field label="Publish date" value={item.publishedDate} onChange={(value) => updateItem(item.id, { publishedDate: value })} />
              <Field label="Featured image link" value={item.imageUrl} onChange={(value) => updateItem(item.id, { imageUrl: value })} placeholder="https://…" />
            </>}
            {active === "media" && <>
              <Field label="Image name" value={item.name} onChange={(value) => updateItem(item.id, { name: value })} />
              <Field label="Image link" value={item.url} onChange={(value) => updateItem(item.id, { url: value })} placeholder="https://…" />
              <Field label="Image description" value={item.altText} onChange={(value) => updateItem(item.id, { altText: value })} placeholder="Describe what is important in the image" />
              <Field label="Where it is used" value={item.usage} onChange={(value) => updateItem(item.id, { usage: value })} />
              {item.url && <div className="media-thumb"><img src={item.url} alt={item.altText || "Preview awaiting description"} /><span>{item.altText ? "Description added" : "Add a description before publishing"}</span></div>}
            </>}
          </article>
        ))}
      </div>
      <button className="collection-add" onClick={addItem}><Plus size={14} /> Add {collectionLabels.find((entry) => entry.id === active)?.label.toLowerCase()} item</button>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label>{label}<input value={value || ""} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} /></label>;
}

function Area({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label>{label}<textarea value={value || ""} onChange={(event) => onChange(event.target.value)} /></label>;
}
