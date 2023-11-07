// mock API functions

const allTasks = new Map();
const userTasks = new Map();

export async function toggleDone(task) {
    console.log(`[api] toggleDone(${task.id})`);
    const t = {
        ...task,
        done: !task.done
    };
    allTasks.set(task.id, t);

    return t;
}

export async function fetchAllTasks() {
    console.log('[api] fetchAllTasks');
    if (allTasks.size > 0 && userTasks.size > 1) {
        return Array.from(allTasks.values());
    }
    const tasks = [];
    for (let i = 0; i < 10; i++) {
        tasks.push(...await fetchMyTasks(i));
    }
    return tasks;
}

export async function fetchMyTasks(userId) {
    console.log(`[api] fetchMyTasks(${userId})`);
    if (userTasks.has(userId)) {
        const ids = userTasks.get(userId);
        return ids.map(id => allTasks.get(id));
    }
    const tasks = [];
    for (let i = 0; i < 10; i++) {
        tasks.push(mockTask(userId));
    }
    userTasks.set(userId, tasks.map(t => t.id));
    return tasks;
}

export async function fetchTask(id) {
    console.log(`[api] fetchTask(${id})`);
    if (allTasks.has(id)) {
        return allTasks.get(id);
    }
    return null
}

let id = 0;

function mockTask(userId) {
    const taskId = id++;
    const done = Math.random() > 0.5;
    const task = {
        id: taskId,
        userId,
        task: 'Some task I need to do: ' + taskId,
        created: new Date(),
        done
    };
    allTasks.set(taskId, task);
    return task;
}