<?php

namespace App\Filament\Resources\Leaderships\Pages;

use App\Filament\Resources\Leaderships\LeadershipResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListLeaderships extends ListRecords
{
    protected static string $resource = LeadershipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
