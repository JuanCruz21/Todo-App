<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titulo' => $this->faker->name(),
            'descripcion' => $this->faker->sentence(),
            'date_finish' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'estado' => $this->faker->randomElement(['Pendiente', 'En Progreso', 'Finalizado']),
            'user_id' => 1,
        ];
    }
}
