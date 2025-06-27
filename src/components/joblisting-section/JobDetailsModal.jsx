import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import parse from "html-react-parser";

// JobDetailsModal component for displaying job details
const JobDetailsModal = ({ job, isOpen, onClose }) => {
  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] bg-white/90 dark:bg-card rounded-lg p-6 shadow-lg'>
        <DialogHeader>
          <DialogTitle className='text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100'>
            {job.title}
          </DialogTitle>
          <div className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
              <p className='flex items-center gap-2'>
                <span>{job.company}</span>
                <span className='flex items-center gap-1'>
                  <MapPin size={16} className='text-muted-foreground' />
                  {job.location}
                </span>
              </p>
              <p className='text-lg font-bold text-primary'>{job.salary}</p>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className='mt-4 max-h-[60vh] md:max-h-[70vh]'>
          <div className='space-y-4'>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              {parse(job.description || "No description available")}
            </p>
            <div className='flex flex-wrap gap-2'>
              <Badge variant='secondary' className='text-sm'>
                {job.type}
              </Badge>
              <Badge variant='secondary' className='text-sm'>
                {job.experience}
              </Badge>
              <Badge variant='secondary' className='text-sm'>
                {job.category}
              </Badge>
              {job.remote && (
                <Badge variant='outline' className='text-sm'>
                  Remote
                </Badge>
              )}
            </div>
            <p className='text-sm text-ring mt-2'>
              Posted on: {new Date(job.date).toLocaleDateString()}
            </p>
          </div>
        </ScrollArea>

        <div className='flex justify-end'>
          <Button className='bg-primary/90 hover:bg-primary cursor-pointer text-white font-medium py-2 px-4 rounded-md transition-colors'>
            Apply Job
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;
