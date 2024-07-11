import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";
import { Activities } from "./activities";
import { CreateActivityModal } from "./create-activity-modal";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Guests } from "./guests";
import { ImportantLinks } from "./important-links";

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const openCreateActivityModal = () => setIsCreateActivityModalOpen(true);

  const closeCreateActivityModal = () => setIsCreateActivityModalOpen(false);

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Activities</h2>
            <Button onClick={openCreateActivityModal} color="primary">
              <Plus className="size-5 text-lime-950" />
              Add activity
            </Button>
          </div>

          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
