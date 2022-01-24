maak pusher account (pusher.com)
met bijv github account

bij aanmaken maak een app (standaard instellingen)
bijv
laravel_echo (channel)

in laravel:
composer require pusher/pusher-php-server

update .env

BROADCAST_DRIVER=pusher

// Get the credentials from your pusher dashboard
PUSHER_APP_ID=XXXXX
PUSHER_APP_KEY=XXXXXXX
PUSHER_APP_SECRET=XXXXXXX

PUSHER_APP_CLUSTER=eu

Open config/app.php and uncomment the
App\Providers\BroadcastServiceProvider::class .

php artisan make:event StatusPizza


in app/Events open StatusPizza:
<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class StatusPizza implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $username;

    public $message;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($username)
    {
        $this->username = $username;
        $this->message  = "{$username} changed the status";
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return ['status-pizza-changed'];
    }
}

Maak een view
Zie welcome als voorbeeld

niet vergeten:
npm install --save pusher-js
en
in bootstrap.js
import Pusher from 'pusher-js'

en natuurlijk:
npm run dev (of watch)
