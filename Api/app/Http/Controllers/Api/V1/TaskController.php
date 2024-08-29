<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\task;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoretaskRequest;
use App\Http\Requests\UpdatetaskRequest;
use App\Http\Resources\taskResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TaskResource::collection(task::where('user_id', Auth::id())->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoretaskRequest $request)
    {
        $task = new Task($request->validated());
        $task->user_id = Auth::id(); // Asigna el ID del usuario autenticado
        $task->save();

        return new TaskResource($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(task $task)
    {
        return new TaskResource($task);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(task $task)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatetaskRequest $request, task $task)
    {
        $task->update($request->validated());
        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(task $task)
    {
        $task->delete();
        return response()->json([
            'message' => 'Task deleted successfully',
        ], 200);
    }
}
