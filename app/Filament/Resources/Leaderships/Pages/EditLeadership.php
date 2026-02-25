<?php

namespace App\Filament\Resources\Leaderships\Pages;

use App\Filament\Resources\Leaderships\LeadershipResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditLeadership extends EditRecord
{
    protected static string $resource = LeadershipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
