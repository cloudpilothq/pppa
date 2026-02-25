<?php

namespace App\Filament\Resources\Leaderships;

use App\Filament\Resources\Leaderships\Pages\CreateLeadership;
use App\Filament\Resources\Leaderships\Pages\EditLeadership;
use App\Filament\Resources\Leaderships\Pages\ListLeaderships;
use App\Filament\Resources\Leaderships\Schemas\LeadershipForm;
use App\Filament\Resources\Leaderships\Tables\LeadershipsTable;
use App\Models\Leadership;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class LeadershipResource extends Resource
{
    protected static ?string $model = Leadership::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return LeadershipForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return LeadershipsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListLeaderships::route('/'),
            'create' => CreateLeadership::route('/create'),
            'edit' => EditLeadership::route('/{record}/edit'),
        ];
    }
}
