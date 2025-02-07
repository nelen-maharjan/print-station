'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addServices } from '@/lib/action';
import { CloudUploadIcon, SendIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'; // Import Dialog from shadcn/ui

const ServiceForm = ({ closeDialog }: { closeDialog: () => void }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const fileInRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set('file', file);
      fetch('/api/upload', {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((url) => {
          setImageUrl(url); 
        });
      });
    }
  }, [file]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !imageUrl) {
      alert('Please provide both a title and an image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', imageUrl);

    try {
      await addServices(formData);
      closeDialog();
      router.refresh();
    } catch (error) {
      console.error('Error creating service:', error);
      alert('There was an error creating the service.');
    }
  };

  return (
    <Dialog open={true} onOpenChange={(open) => { if (!open) closeDialog(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Service</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-12">
          <h2 className="text-2xl font-bold">Create Service</h2>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="title">Service Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <div className="w-64 p-2 min-h-64 bg-gray-400 rounded-md relative">
                {imageUrl && <img src={imageUrl} className="rounded-md" alt="Uploaded Image" />}
                <div className="absolute inset-0 flex items-center justify-center">
                  <input
                    className="hidden"
                    type="file"
                    onChange={(ev) => setFile(ev.target.files?.[0] || null)}
                    ref={fileInRef}
                  />
                  <Button type="button" onClick={() => fileInRef?.current?.click()}>
                    <CloudUploadIcon size={16} />
                    Upload image
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-center">
            <Button type="submit">
              <SendIcon size={16} />
              Publish
            </Button>
          </div>
        </form>

        <DialogFooter>
          <Button variant="outline" onClick={closeDialog}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceForm;
