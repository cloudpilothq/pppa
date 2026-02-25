<?php

namespace App\Filament\Resources\Leaderships\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class LeadershipForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('role')
                    ->required(),
                Textarea::make('bio')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->image(),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
