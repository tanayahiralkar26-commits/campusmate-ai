
import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-icon">✦</div>
        <div>
          <h2>CampusMate</h2>
          <p>Your college companion</p>
        </div>
      </div>

      <button class="nav-item active" data-view="home">⌂ &nbsp; Dashboard</button>
      <button class="nav-item" data-view="chat">✧ &nbsp; AI Assistant</button>
      <button class="nav-item" data-view="tasks">☷ &nbsp; My Assignments</button>
      <button class="nav-item" data-view="planner">▦ &nbsp; Study Planner</button>
      
<button class="nav-item theme-toggle" id="theme-toggle" type="button">
  <span id="theme-icon">🌙</span>
  <span id="theme-label">Dark Mode</span>
</button>


      <div class="sidebar-bottom">
        <div class="profile-avatar">S</div>
        <div>
          <strong>Student Space</strong>
          <p>Ready to learn ✨</p>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <span class="eyebrow">YOUR PERSONAL STUDY SPACE</span>
        <div class="today-label">✦ Made for student life</div>
      </header>

      <section class="welcome">
        <div>
          <p class="eyebrow">WELCOME TO CAMPUSMATE</p>
          <h1>Make student life<br />a little <span>easier.</span></h1>
          <p class="welcome-text">
            Your study buddy for assignments, deadlines and better study plans.
          </p>
          <button class="primary-btn" id="start-chat">✧ Talk to CampusMate</button>
        </div>
        <div class="welcome-art" aria-hidden="true">
          <div class="orb">✦</div>
          <div class="float-card card-one">📚 Study smarter</div>
          <div class="float-card card-two">✓ Stay on track</div>
          <div class="art-caption">One step at a time.</div>
        </div>
      </section>
      
<section class="focus-section">
  <div class="focus-heading">
    <div>
      <p class="eyebrow">YOUR DAILY PROGRESS</p>
      <h2>Today's Focus ✨</h2>
      <p class="focus-subtitle">Small steps make big progress.</p>
    </div>
    <div class="focus-date">STAY ON TRACK</div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-icon purple">☷</span>
      <p>Total assignments</p>
      <h3 id="total-tasks">0</h3>
    </div>

    <div class="stat-card">
      <span class="stat-icon peach">◷</span>
      <p>Pending</p>
      <h3 id="pending-tasks">0</h3>
    </div>

    <div class="stat-card">
      <span class="stat-icon blue">✓</span>
      <p>Completed</p>
      <h3 id="completed-tasks">0</h3>
    </div>

    <div class="stat-card">
      <span class="stat-icon red">!</span>
      <p>Overdue</p>
      <h3 id="overdue-tasks">0</h3>
    </div>
  </div>

  <div class="progress-card">
    <div class="progress-top">
      <strong>Assignment progress</strong>
      <span id="progress-label">0% completed</span>
    </div>
    <div class="progress-track">
      <div id="progress-fill" class="progress-fill"></div>
    </div>
    <p id="progress-message">Add an assignment to get started!</p>
  </div>
</section>


      <section class="section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">YOUR WORKSPACE</p>
            <h2>What do you need today?</h2>
          </div>
        </div>

        <div class="feature-grid">
          <button class="feature-card" data-view="chat">
            <div class="feature-icon purple">✧</div>
            <h3>Ask your AI buddy</h3>
            <p>Get help with college life, topics and study questions.</p>
            <span>Start a conversation ↗</span>
          </button>

          <button class="feature-card" data-view="tasks">
            <div class="feature-icon peach">☷</div>
            <h3>Track assignments</h3>
            <p>Keep your tasks organised and mark them complete.</p>
            <span>View your tasks ↗</span>
          </button>

          <button class="feature-card" data-view="planner">
            <div class="feature-icon blue">▦</div>
            <h3>Plan your study time</h3>
            <p>Build a simple plan for your next study session.</p>
            <span>Make a study plan ↗</span>
          </button>
        </div>
      </section>

      <section class="section bottom-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">A LITTLE MOTIVATION</p>
            <h2>Your progress starts here.</h2>
          </div>
        </div>
        <div class="motivation-card">
          <div class="motivation-star">✦</div>
          <div>
            <h3>You don't have to do everything today.</h3>
            <p>Just choose one task, take the first step, and build momentum.</p>
          </div>
        </div>
      </section>

      <footer>CampusMate AI · Built to make student life simpler.</footer>
    </main>
  </div>

  <div class="chat-panel" id="chat-panel" hidden>
    <div class="chat-header">
      <div>
        <strong>✦ CampusMate AI</strong>
        <p>Your student assistant</p>
      </div>
      <button class="close-chat" id="close-chat" aria-label="Close chat">×</button>
    </div>
    <div class="chat-messages" id="chat-messages">
      <div class="message assistant">
        Hey there! 👋 I'm CampusMate, your study buddy.
        <br /><br />
        I can help you organise assignments, create a study plan, or get started with a topic. What would you like to do?
      </div>
    </div>
    <div class="suggestions">
      <button data-prompt="Help me make a study plan">Study plan</button>
      <button data-prompt="Help me organise my assignments">Assignments</button>
      <button data-prompt="Give me some study motivation">Motivation</button>
    </div>
    <form class="chat-form" id="chat-form">
      <input id="chat-input" placeholder="Ask me anything..." autocomplete="off" />
      <button type="submit" aria-label="Send message">➤</button>
    </form>
    <p class="demo-note">Demo assistant · Responses are generated locally.</p>
  </div>
`

const chatPanel = document.querySelector('#chat-panel')
const chatMessages = document.querySelector('#chat-messages')
const chatInput = document.querySelector('#chat-input')

function openChat() {
  chatPanel.hidden = false
  chatInput.focus()
}

function addMessage(text, sender) {
  const message = document.createElement('div')
  message.className = `message ${sender}`
  message.textContent = text
  chatMessages.appendChild(message)
  chatMessages.scrollTop = chatMessages.scrollHeight
}


function getReply(text) {
  const input = text.trim().toLowerCase();

  // Add an assignment
  if (input.startsWith("add assignment:")) {
    const taskName = text.trim().slice("add assignment:".length).trim();

    if (!taskName) {
      return "Please enter an assignment name after the colon.";
    }

    const tasks = getTasks();
    tasks.push({
      id: Date.now(),
      name: taskName,
      date: "",
      done: false
    });

    saveTasks(tasks);
    return `✅ Assignment added successfully: ${taskName}`;
  }

  // Show assignments
  if (input.includes("show") && input.includes("assignment")) {
    const tasks = getTasks();

    if (tasks.length === 0) {
      return "You don't have any assignments yet. Try: Add assignment: DBMS presentation";
    }

    return "📝 Your assignments:\n" +
      tasks.map((task, index) =>
        `${index + 1}. ${task.done ? "✅ Completed" : "⬜ Pending"} — ${task.name}` +
        (task.date ? ` (Due: ${task.date})` : "")
      ).join("\n");
  }

  // Complete an assignment
  if (input.startsWith("complete assignment:")) {
    const taskName = text.trim()
      .slice("complete assignment:".length)
      .trim()
      .toLowerCase();

    if (!taskName) {
      return "Please provide an assignment name.";
    }

    const tasks = getTasks();
    const task = tasks.find(item =>
      item.name.toLowerCase().includes(taskName)
    );

    if (!task) {
      return "I couldn't find that assignment. Try: Show my assignments";
    }

    task.done = true;
    saveTasks(tasks);

    return `🎉 ${task.name} is now marked complete!`;
  }

  // Study planner
  if (
    input.includes("study") ||
    input.includes("plan") ||
    input.includes("timetable")
  ) {
    return "📚 Let's make a study plan! Open Study Planner, enter your topic, choose a duration, and create your plan.";
  }

  // Motivation
  if (
    input.includes("motivation") ||
    input.includes("motivational") ||
    input.includes("stressed") ||
    input.includes("tired")
  ) {
    return "🌱 Take a breath. Choose one small task and work on it for 10 minutes. Every small step counts!";
  }

  // Greetings
  if (
    input === "hi" ||
    input === "hello" ||
    input === "hey"
  ) {
    return "Hey! 👋 I'm CampusMate. I can add assignments, show your tasks, mark them complete, and help you plan study sessions.";
  }

  // Thanks
  if (input.includes("thank")) {
    return "You're welcome! 💜 Keep going, one step at a time.";
  }

  // Default response
  return 'I can help you manage assignments and study time! Try "Add assignment: DBMS presentation", "Show my assignments", or "Complete assignment: DBMS presentation".';
}




function sendMessage(text) {
  const cleanText = text.trim()
  if (!cleanText) return

  openChat()
  addMessage(cleanText, 'user')
  addMessage(getReply(cleanText), 'assistant')
  chatInput.value = ''
}

document.querySelector('#start-chat').addEventListener('click', openChat)
document.querySelector('#close-chat').addEventListener('click', () => {
  chatPanel.hidden = true
})

document.querySelector('#chat-form').addEventListener('submit', (event) => {
  event.preventDefault()
  sendMessage(chatInput.value)
})

document.querySelectorAll('[data-prompt]').forEach((button) => {
  button.addEventListener('click', () => sendMessage(button.dataset.prompt))
})

document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.view

    document.querySelectorAll('.nav-item').forEach((item) => {
      item.classList.toggle('active', item.dataset.view === view)
    })

    if (view === 'chat') {
      openChat()
    } else if (view === 'tasks') {
      showTasks()
    } else if (view === 'planner') {
      showPlanner()
    } else {
      showHome()
    }
  })
})

function showHome() {
  document.querySelector('.welcome').hidden = false
  document.querySelectorAll('.section').forEach((section) => {
    section.hidden = false
  })
  document.querySelector('.eyebrow').textContent = 'YOUR PERSONAL STUDY SPACE'
  document.querySelector('.topbar .today-label').textContent = '✦ Made for student life'
  const old = document.querySelector('.dynamic-view')
  if (old) old.remove()
}

function showDynamicView(title, subtitle, content) {
  document.querySelector('.welcome').hidden = true
  document.querySelectorAll('.section').forEach((section) => {
    section.hidden = true
  })

  let view = document.querySelector('.dynamic-view')
  if (!view) {
    view = document.createElement('section')
    view.className = 'dynamic-view'
    document.querySelector('.main-content').insertBefore(view, document.querySelector('footer'))
  }

  view.innerHTML = `
    <p class="eyebrow">YOUR WORKSPACE</p>
    <h1>${title}</h1>
    <p class="welcome-text">${subtitle}</p>
    ${content}
  `
  view.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function getTasks() {
  try {
    return JSON.parse(localStorage.getItem('campusmate-tasks') || '[]')
  } catch {
    return []
  }
}


function saveTasks(tasks) {
  localStorage.setItem('campusmate-tasks', JSON.stringify(tasks))
  updateFocus()
}

function updateFocus() {
  const totalElement = document.querySelector('#total-tasks')

  // The dashboard section might not be available on every view.
  if (!totalElement) return

  const tasks = getTasks()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const total = tasks.length
  const completed = tasks.filter(task => task.done).length
  const pending = total - completed

  const overdue = tasks.filter(task => {
    if (task.done || !task.date) return false

    // Date-only strings are parsed locally to avoid timezone issues.
    const parts = task.date.split('-').map(Number)
    const dueDate = new Date(parts[0], parts[1] - 1, parts[2])
    dueDate.setHours(0, 0, 0, 0)

    return dueDate < today
  }).length

  const percentage = total === 0
    ? 0
    : Math.round((completed / total) * 100)

  document.querySelector('#total-tasks').textContent = total
  document.querySelector('#pending-tasks').textContent = pending
  document.querySelector('#completed-tasks').textContent = completed
  document.querySelector('#overdue-tasks').textContent = overdue
  document.querySelector('#progress-label').textContent =
    `${percentage}% completed`

  document.querySelector('#progress-fill').style.width =
    `${percentage}%`

  const message = total === 0
    ? 'Add an assignment to get started!'
    : completed === total
      ? 'Amazing! All your assignments are complete! 🎉'
      : `${pending} assignment${pending === 1 ? '' : 's'} left. Keep going! 💜`

  document.querySelector('#progress-message').textContent = message
}

function showTasks() {
  showDynamicView('My Assignments', 'Keep your deadlines in one simple place.', `
    <form id="task-form" class="task-form">
      <input id="task-name" placeholder="e.g. Complete DBMS presentation" required maxlength="120" />
      <input id="task-date" type="date" aria-label="Due date" />
      <button class="primary-btn" type="submit">+ Add task</button>
    </form>

    <div class="task-controls">
      <input id="task-search" type="search" placeholder="🔍 Search assignments..." aria-label="Search assignments" />
      <select id="task-filter" aria-label="Filter assignments">
        <option value="all">All assignments</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>

    <div id="task-list" class="task-list"></div>
  `)

  const list = document.querySelector('#task-list')
  const search = document.querySelector('#task-search')
  const filter = document.querySelector('#task-filter')

  function renderTasks() {
    const tasks = getTasks()
    const query = search.value.trim().toLowerCase()
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const filteredTasks = tasks.filter((task) => {
      const matchesSearch = task.name.toLowerCase().includes(query)

      let matchesFilter = true

      if (filter.value === 'pending') {
        matchesFilter = !task.done
      } else if (filter.value === 'completed') {
        matchesFilter = task.done
      } else if (filter.value === 'overdue') {
        if (task.done || !task.date) {
          matchesFilter = false
        } else {
          const parts = task.date.split('-').map(Number)
          const dueDate = new Date(parts[0], parts[1] - 1, parts[2])
          dueDate.setHours(0, 0, 0, 0)
          matchesFilter = dueDate < today
        }
      }

      return matchesSearch && matchesFilter
    })

    list.innerHTML = ''

    if (tasks.length === 0) {
      list.textContent = 'No tasks yet. Add your first assignment above!'
      return
    }

    if (filteredTasks.length === 0) {
      list.textContent = 'No matching assignments found.'
      return
    }

    filteredTasks.forEach((task) => {
      const row = document.createElement('div')
      row.className = 'task-row'

      const label = document.createElement('label')
      label.className = 'task-label'

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.checked = task.done

      checkbox.addEventListener('change', () => {
        const updated = getTasks().map((item) =>
          item.id === task.id
            ? { ...item, done: checkbox.checked }
            : item
        )
        saveTasks(updated)
        renderTasks()
      })

      const text = document.createElement('span')
      text.textContent = task.name

      if (task.done) text.classList.add('completed')

      label.append(checkbox, text)

      const due = document.createElement('span')
      due.className = 'task-date'
      due.textContent = task.date ? `Due ${task.date}` : 'No due date'

      const remove = document.createElement('button')
      remove.className = 'remove-task'
      remove.textContent = 'Delete'

      remove.addEventListener('click', () => {
        saveTasks(getTasks().filter((item) => item.id !== task.id))
        renderTasks()
      })

      row.append(label, due, remove)
      list.appendChild(row)
    })
  }

  document.querySelector('#task-form').addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.querySelector('#task-name').value.trim()
    const date = document.querySelector('#task-date').value

    if (!name) return

    const tasks = getTasks()
    tasks.push({
      id: Date.now(),
      name,
      date,
      done: false
    })

    saveTasks(tasks)
    renderTasks()
    event.target.reset()
  })

  search.addEventListener('input', renderTasks)
  filter.addEventListener('change', renderTasks)

  renderTasks()
}

function showPlanner() {
  showDynamicView('Study Planner', 'Create and manage your study sessions.', `
    <form id="planner-form" class="planner-form">
      <label for="study-topic">What will you study?</label>
      <input id="study-topic" placeholder="e.g. DBMS — Normalization" required maxlength="100" />

      <label for="study-duration">Study duration</label>
      <select id="study-duration">
        <option value="25">25 minutes</option>
        <option value="45">45 minutes</option>
        <option value="60">60 minutes</option>
        <option value="90">90 minutes</option>
      </select>

      <button class="primary-btn" type="submit">+ Save study plan</button>
    </form>

    <div id="study-result" class="study-result" hidden></div>

    <h2 class="saved-plans-heading">My Saved Plans</h2>
    <div id="saved-plans-list" class="saved-plans-list"></div>
    
<div class="study-dashboard">
  <h2>📊 My Study Progress</h2>
  <p>Your learning progress, based on your saved study sessions.</p>

  <div class="study-stats">
    <div class="study-stat-card">
      <span>This Week</span>
      <h3 id="weekly-study-time">0h 0m</h3>
      <p>Total study time</p>
    </div>

    <div class="study-stat-card">
      <span>This Week</span>
      <h3 id="weekly-session-count">0</h3>
      <p>Study sessions</p>
    </div>

    <div class="study-stat-card">
      <span>All Time</span>
      <h3 id="topics-studied-count">0</h3>
      <p>Topics studied</p>
    </div>
  </div>

  <h3>Last 7 Days</h3>
  <div id="study-week-chart" class="study-week-chart"></div>

  <h3>Subject-wise Progress</h3>
  <div id="subject-progress-list" class="subject-progress-list"></div>
</div>

    
<div class="study-log-section">
  <h2>📚 Study Log</h2>
  <p>Track what you actually studied, with or without a saved plan.</p>

  <form id="study-log-form">
    <label for="study-date">Study Date</label>
    <input id="study-date" type="date" required />

    <label for="study-topic">Subject / Topic Studied</label>
    
<input
  id="study-log-topic"
  type="text"
  placeholder="e.g. DSA - Linked Lists"
  required
/>


    <label for="study-duration">Time Spent (minutes)</label>
   
<input
  id="study-log-duration"
  type="number"
  min="1"
  placeholder="e.g. 45"
  required
/>


    <label for="study-plan-link">Link to a Saved Plan (optional)</label>
    <select id="study-plan-link">
      <option value="">Independent Study Session</option>
    </select>

    <label for="study-notes">What did you learn? (optional)</label>
    <textarea
      id="study-notes"
      placeholder="Write what you completed or understood..."
      rows="3"
    ></textarea>

    <button type="submit">Save Study Session</button>
  </form>

  <div class="study-log-summary" id="study-log-summary"></div>
  <div class="study-log-list" id="study-log-list"></div>
</div>

  `)

  const form = document.querySelector('#planner-form')
  const result = document.querySelector('#study-result')
  const plansList = document.querySelector('#saved-plans-list')
  const topicInput = document.querySelector('#study-topic')
  const durationInput = document.querySelector('#study-duration')

  // Load multiple plans and migrate the previously saved single plan.
  function getPlans() {
    try {
      const stored = JSON.parse(
        localStorage.getItem('campusmate-study-plans') || 'null'
      )

      if (Array.isArray(stored)) return stored

      const oldPlan = JSON.parse(
        localStorage.getItem('campusmate-study-plan') || 'null'
      )

      if (
        oldPlan &&
        typeof oldPlan.topic === 'string' &&
        Number.isFinite(Number(oldPlan.duration))
      ) {
        const migrated = [{
          id: Date.now(),
          topic: oldPlan.topic,
          duration: Number(oldPlan.duration),
          savedAt: oldPlan.savedAt || new Date().toISOString()
        }]

        localStorage.setItem(
          'campusmate-study-plans',
          JSON.stringify(migrated)
        )

        return migrated
      }

      return []
    } catch (error) {
      console.error('Could not load study plans:', error)
      return []
    }
  }

  function savePlans(plans) {
    localStorage.setItem(
      'campusmate-study-plans',
      JSON.stringify(plans)
    )
  }

  function showPlan(plan) {
    result.hidden = false
    result.replaceChildren()

    const heading = document.createElement('h2')
    heading.textContent = `Your ${plan.duration}-minute plan`

    const intro = document.createElement('p')
    intro.textContent = `Topic: ${plan.topic}`

    const steps = document.createElement('ol')

    const first = document.createElement('li')
    first.textContent =
      `Study ${plan.topic} for ${Math.max(10, plan.duration - 10)} minutes.`

    const second = document.createElement('li')
    second.textContent = 'Take a 5-minute break.'

    const third = document.createElement('li')
    third.textContent =
      'Use the remaining time to recall key points and solve a practice question.'

    steps.append(first, second, third)
    result.append(heading, intro, steps)
  }

  function renderPlans() {
    const plans = getPlans()
    plansList.replaceChildren()

    if (plans.length === 0) {
      plansList.textContent = 'No saved plans yet. Create your first plan above!'
      return
    }

    plans.forEach((plan) => {
      const card = document.createElement('div')
      card.className = 'saved-plan-card'

      const details = document.createElement('div')
      details.className = 'saved-plan-details'

      const title = document.createElement('strong')
      title.textContent = plan.topic

      const duration = document.createElement('p')
      duration.textContent = `${plan.duration} minutes`

      const viewButton = document.createElement('button')
      viewButton.type = 'button'
      viewButton.className = 'primary-btn'
      viewButton.textContent = 'View plan'
      viewButton.addEventListener('click', () => {
        topicInput.value = plan.topic
        durationInput.value = String(plan.duration)
        showPlan(plan)
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      })

      const deleteButton = document.createElement('button')
      deleteButton.type = 'button'
      deleteButton.className = 'remove-task'
      deleteButton.textContent = 'Delete'
      deleteButton.addEventListener('click', () => {
        savePlans(getPlans().filter((item) => item.id !== plan.id))
        renderPlans()
      })

      details.append(title, duration)
      card.append(details, viewButton, deleteButton)
      plansList.appendChild(card)
    })
  }
  
  // ---------- STUDY LOG ----------

  const logForm = document.querySelector('#study-log-form')
  const logDate = document.querySelector('#study-date')
  const logTopic = document.querySelector('#study-log-topic')
const logDuration = document.querySelector('#study-log-duration')
  const logPlan = document.querySelector('#study-plan-link')
  const logNotes = document.querySelector('#study-notes')
  const logSummary = document.querySelector('#study-log-summary')
  const logList = document.querySelector('#study-log-list')

  // Default the date to today.
  logDate.value = new Date().toLocaleDateString('en-CA')

  function getStudyLogs() {
    try {
      const logs = JSON.parse(
        localStorage.getItem('campusmate-study-logs') || '[]'
      )
      return Array.isArray(logs) ? logs : []
    } catch (error) {
      console.error('Could not load study logs:', error)
      return []
    }
  }

  function saveStudyLogs(logs) {
    localStorage.setItem('campusmate-study-logs', JSON.stringify(logs))
  }

  function populatePlanOptions() {
    const previousValue = logPlan.value
    logPlan.replaceChildren()

    const independentOption = document.createElement('option')
    independentOption.value = ''
    independentOption.textContent = 'Independent Study Session'
    logPlan.appendChild(independentOption)

    getPlans().forEach((plan) => {
      const option = document.createElement('option')
      option.value = String(plan.id)
      option.textContent = `${plan.topic} (${plan.duration} min)`
      logPlan.appendChild(option)
    })

    logPlan.value = previousValue
  }

  function renderStudyLogs() {
    const logs = getStudyLogs()
    logList.replaceChildren()

    const totalMinutes = logs.reduce(
      (total, log) => total + Number(log.duration || 0),
      0
    )

    logSummary.textContent =
      `${logs.length} session(s) recorded · ` +
      `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m studied`

    if (logs.length === 0) {
      logList.textContent = 'No study sessions yet. Record your first session!'
      return
    }

    logs
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
      .forEach((log) => {
        const card = document.createElement('div')
        card.className = 'study-log-card'

        const title = document.createElement('strong')
        title.textContent = log.topic

        const details = document.createElement('p')
        details.textContent = `${log.date} · ${log.duration} minutes`

        const notes = document.createElement('p')
        notes.textContent = log.notes || 'No learning notes added.'

        const link = document.createElement('p')
        const linkedPlan = getPlans().find(
          (plan) => String(plan.id) === String(log.planId)
        )
        link.textContent = log.planId
          ? `Saved plan: ${linkedPlan ? linkedPlan.topic : 'Plan no longer exists'}`
          : 'Independent study session'

        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.className = 'remove-task'
        deleteButton.textContent = 'Delete session'
        deleteButton.addEventListener('click', () => {
          saveStudyLogs(getStudyLogs().filter((item) => item.id !== log.id))
renderStudyLogs()
renderStudyDashboard()
        })

        card.append(title, details, notes, link, deleteButton)
        logList.appendChild(card)
      })
  }

  logForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const topic = logTopic.value.trim()
    const duration = Number(logDuration.value)

    if (!topic || !logDate.value || !Number.isFinite(duration) || duration < 1) {
      alert('Please enter a topic, date, and valid study duration.')
      return
    }

    const logs = getStudyLogs()

    logs.push({
      id: Date.now(),
      date: logDate.value,
      topic,
      duration,
      notes: logNotes.value.trim(),
      planId: logPlan.value || '',
      savedAt: new Date().toISOString()
    })

    saveStudyLogs(logs)
    logForm.reset()
    logDate.value = new Date().toLocaleDateString('en-CA')
    populatePlanOptions()
    renderStudyLogs()
    renderStudyDashboard()
  })
  
  // ---------- STUDY PROGRESS DASHBOARD ----------

  function renderStudyDashboard() {
    const logs = getStudyLogs()
    const now = new Date()

    // Use local calendar dates to identify the last 7 days.
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    )

    const dateKey = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }

    const lastSevenDays = []

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)

      lastSevenDays.push({
        date: dateKey(date),
        label: date.toLocaleDateString('en-IN', {
          weekday: 'short'
        })
      })
    }

    const weekDates = new Set(lastSevenDays.map(day => day.date))

    const weeklyLogs = logs.filter(log =>
      weekDates.has(log.date)
    )

    const weeklyMinutes = weeklyLogs.reduce(
      (sum, log) => sum + Math.max(0, Number(log.duration) || 0),
      0
    )

    document.querySelector('#weekly-study-time').textContent =
      `${Math.floor(weeklyMinutes / 60)}h ${weeklyMinutes % 60}m`

    document.querySelector('#weekly-session-count').textContent =
      weeklyLogs.length

    const uniqueTopics = new Set(
      logs
        .map(log => log.topic.trim().toLowerCase())
        .filter(Boolean)
    )

    document.querySelector('#topics-studied-count').textContent =
      uniqueTopics.size

    // Daily activity bars
    const chart = document.querySelector('#study-week-chart')
    chart.replaceChildren()

    const dailyMinutes = lastSevenDays.map(day => ({
      ...day,
      minutes: weeklyLogs
        .filter(log => log.date === day.date)
        .reduce(
          (sum, log) => sum + Math.max(0, Number(log.duration) || 0),
          0
        )
    }))

    const maxMinutes = Math.max(
      60,
      ...dailyMinutes.map(day => day.minutes)
    )

    dailyMinutes.forEach(day => {
      const column = document.createElement('div')
      column.className = 'study-day-column'

      const value = document.createElement('span')
      value.className = 'study-day-value'
      value.textContent = `${day.minutes}m`

      const track = document.createElement('div')
      track.className = 'study-day-track'

      const bar = document.createElement('div')
      bar.className = 'study-day-bar'
      bar.style.height =
        `${day.minutes > 0 ? Math.max(5, day.minutes / maxMinutes * 100) : 0}%`

      track.appendChild(bar)

      const label = document.createElement('span')
      label.className = 'study-day-label'
      label.textContent = day.label

      column.append(value, track, label)
      chart.appendChild(column)
    })

    // Group study minutes by subject.
    // The subject is inferred from the beginning of the topic name.
    const subjects = {}

    logs.forEach(log => {
      const topic = log.topic.trim()
      if (!topic) return

      const separatorIndex = topic.search(/[\s\-–—:]/)
      const subject = (
        separatorIndex > 0
          ? topic.slice(0, separatorIndex)
          : topic
      ).trim()

      const key = subject.toLowerCase()

      if (!subjects[key]) {
        subjects[key] = { name: subject, minutes: 0 }
      }

      subjects[key].minutes +=
        Math.max(0, Number(log.duration) || 0)
    })

    const subjectList = document.querySelector('#subject-progress-list')
    subjectList.replaceChildren()

    const sortedSubjects = Object.values(subjects)
      .sort((a, b) => b.minutes - a.minutes)

    if (sortedSubjects.length === 0) {
      subjectList.textContent =
        'Your subject-wise progress will appear after you save study sessions.'
      return
    }

    const maxSubjectMinutes = Math.max(
      ...sortedSubjects.map(subject => subject.minutes),
      1
    )

    sortedSubjects.forEach(subject => {
      const row = document.createElement('div')
      row.className = 'subject-progress-row'

      const heading = document.createElement('div')
      heading.className = 'subject-progress-heading'

      const name = document.createElement('strong')
      name.textContent = subject.name

      const time = document.createElement('span')
      time.textContent =
        `${Math.floor(subject.minutes / 60)}h ${subject.minutes % 60}m`

      heading.append(name, time)

      const track = document.createElement('div')
      track.className = 'subject-progress-track'

      const bar = document.createElement('div')
      bar.className = 'subject-progress-bar'
      bar.style.width =
        `${subject.minutes / maxSubjectMinutes * 100}%`

      track.appendChild(bar)
      row.append(heading, track)
      subjectList.appendChild(row)
    })
  }


  populatePlanOptions()
renderStudyLogs()
renderStudyDashboard()


  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const topic = topicInput.value.trim()
    const duration = Number(durationInput.value)

    if (!topic) return

    const plan = {
      id: Date.now(),
      topic,
      duration,
      savedAt: new Date().toISOString()
    }

    try {
      const plans = getPlans()
      plans.unshift(plan)
      savePlans(plans)
      showPlan(plan)
      renderPlans()
    } catch (error) {
      console.error('Could not save study plan:', error)
      alert('Could not save your plan. Please check browser storage.')
    }
  })

  // Migrate the old plan before displaying saved plans.
  getPlans()
  renderPlans()
}


updateFocus()

const themeToggle = document.querySelector('#theme-toggle')
const themeIcon = document.querySelector('#theme-icon')
const themeLabel = document.querySelector('#theme-label')

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark)
  themeIcon.textContent = isDark ? '☀️' : '🌙'
  themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode'
  localStorage.setItem('campusmate-theme', isDark ? 'dark' : 'light')
}

applyTheme(localStorage.getItem('campusmate-theme') === 'dark')

themeToggle.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('dark-mode'))
})
