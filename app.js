const palette = ["#fb7185", "#38bdf8", "#22c55e", "#a78bfa"];

const GAME_LIBRARY = [
  {
    id: "math-4-1-rule-expedition",
    title: "규칙 탐험대",
    subject: "수학",
    grade: "4학년",
    unit: "4-1 5단원",
    content: "규칙 찾기",
    icon: "★",
    rounds: 10,
    players: [2, 3, 4],
    source: "4학년 1학기 수학 5단원 단원학습지도안",
    description: "도형 배열, 수 배열표, 등호, 식 배열, 계산식 만들기까지 5단원 흐름에 맞춰 규칙을 찾고 설명하는 게임입니다.",
    tags: ["규칙 찾기", "도형 배열", "수 배열표", "등호", "식 배열", "수 카드"],
    problems: [
      {
        type: "도형 배열을 수로 나타내기",
        text: "1층 2개, 2층 4개, 3층 6개로 쌓은 건물입니다. 4층에는 몇 개가 필요할까요?",
        answer: "8개",
        options: ["7개", "8개", "9개", "10개"],
        rule: "층이 하나 늘 때마다 쌓기나무가 2개씩 늘어납니다."
      },
      {
        type: "도형 배열을 수로 나타내기",
        text: "삼각형 모양이 1번째 3개, 2번째 6개, 3번째 9개입니다. 4번째는?",
        answer: "12개",
        options: ["10개", "11개", "12개", "15개"],
        rule: "차례가 1 늘 때마다 3개씩 증가합니다."
      },
      {
        type: "규칙을 식으로 나타내기",
        text: "계단 1칸은 4개, 2칸은 7개, 3칸은 10개입니다. 4칸은?",
        answer: "13개",
        options: ["12개", "13개", "14개", "16개"],
        rule: "처음 4개에서 칸이 늘 때마다 3개씩 더해집니다."
      },
      {
        type: "규칙을 식으로 나타내기",
        text: "1번째 5, 2번째 9, 3번째 13입니다. 5번째 수를 구하세요.",
        answer: "21",
        options: ["17", "19", "21", "25"],
        rule: "4씩 커지므로 5, 9, 13, 17, 21입니다."
      },
      {
        type: "수 배열표에서 규칙 찾기",
        text: "수 배열표에서 오른쪽으로 갈 때 4씩 커집니다. 12, 16, 20, □",
        answer: "24",
        options: ["22", "23", "24", "26"],
        rule: "오른쪽으로 한 칸 갈 때마다 4를 더합니다."
      },
      {
        type: "수 배열표에서 규칙 찾기",
        text: "수 배열표에서 아래로 갈 때 10씩 커집니다. 27 아래의 수는?",
        answer: "37",
        options: ["17", "28", "37", "47"],
        rule: "아래로 한 칸 내려가면 10이 커집니다."
      },
      {
        type: "등호의 의미",
        text: "양쪽의 값이 같아지는 식을 고르세요.",
        answer: "8+5 = 6+7",
        options: ["8+5 = 6+7", "9+4 = 8+6", "15-6 = 4+6", "7+3 = 12-1"],
        rule: "등호는 양쪽의 값이 같다는 뜻입니다. 13 = 13인 식이 옳습니다."
      },
      {
        type: "등호의 의미",
        text: "□에 들어갈 수는? 14 - 5 = □ + 3",
        answer: "6",
        options: ["4", "5", "6", "9"],
        rule: "14-5는 9이고, 6+3도 9입니다."
      },
      {
        type: "덧셈식 배열에서 규칙 찾기",
        text: "3+7=10, 4+8=12, 5+9=14, 다음 식의 값은?",
        answer: "16",
        options: ["15", "16", "17", "18"],
        rule: "두 수가 각각 1씩 커져서 합은 2씩 커집니다."
      },
      {
        type: "뺄셈식 배열에서 규칙 찾기",
        text: "20-3=17, 20-5=15, 20-7=13, 다음 값은?",
        answer: "11",
        options: ["9", "10", "11", "12"],
        rule: "빼는 수가 2씩 커지므로 결과는 2씩 작아집니다."
      },
      {
        type: "곱셈식 배열에서 규칙 찾기",
        text: "4×2=8, 4×3=12, 4×4=16, 4×5=?",
        answer: "20",
        options: ["18", "20", "22", "24"],
        rule: "곱하는 수가 1씩 커지면 값은 4씩 커집니다."
      },
      {
        type: "나눗셈식 배열에서 규칙 찾기",
        text: "36÷3=12, 33÷3=11, 30÷3=10, 다음 값은?",
        answer: "9",
        options: ["7", "8", "9", "10"],
        rule: "나누어지는 수가 3씩 작아져서 몫은 1씩 작아집니다."
      },
      {
        type: "규칙적인 계산식 만들기",
        text: "달력에서 아래로 한 칸 내려가면 수가 7 커집니다. 18 아래의 수는?",
        answer: "25",
        options: ["19", "24", "25", "28"],
        rule: "달력에서는 같은 요일 아래 칸이 7만큼 큽니다."
      },
      {
        type: "규칙적인 계산식 만들기",
        text: "좌석 번호가 4, 8, 12, 16 순서입니다. 다음 번호는?",
        answer: "20",
        options: ["18", "19", "20", "24"],
        rule: "4씩 커지는 생활 속 수 배열입니다."
      },
      {
        type: "수 카드 규칙 설명하기",
        text: "수 카드 6, 12, 18, 24 다음에 알맞은 카드는?",
        answer: "30",
        options: ["28", "30", "32", "36"],
        rule: "6씩 커지는 규칙입니다."
      },
      {
        type: "수 카드 규칙 설명하기",
        text: "수 카드 2, 4, 8, 16 다음에 알맞은 카드는?",
        answer: "32",
        options: ["20", "24", "30", "32"],
        rule: "앞의 수에 2를 곱하는 규칙입니다."
      }
    ]
  }
];

const state = {
  selectedGame: GAME_LIBRARY[0],
  roster: [],
  players: [],
  scores: [],
  round: 0,
  roundLimit: 10,
  timeLimit: 30,
  questionOrder: [],
  current: null,
  answered: new Set(),
  answers: [],
  roundJudged: false,
  roundStartedAt: 0,
  timerId: null,
  autoAdvanceId: null,
  remainingSeconds: 0,
  lastCountdownSecond: null,
  audioContext: null,
  records: []
};

const $ = (id) => document.getElementById(id);

const screens = {
  library: $("libraryScreen"),
  setup: $("setupScreen"),
  game: $("gameScreen"),
  finish: $("finishScreen")
};

function unique(values) {
  return ["전체", ...Array.from(new Set(values))];
}

function fillFilter(select, values) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function initLibrary() {
  fillFilter($("subjectFilter"), unique(GAME_LIBRARY.map((game) => game.subject)));
  fillFilter($("gradeFilter"), unique(GAME_LIBRARY.map((game) => game.grade)));
  fillFilter($("contentFilter"), unique(GAME_LIBRARY.map((game) => game.content)));
  renderLibrary();
}

function renderLibrary() {
  const subject = $("subjectFilter").value;
  const grade = $("gradeFilter").value;
  const content = $("contentFilter").value;
  const games = GAME_LIBRARY.filter((game) => {
    return (subject === "전체" || game.subject === subject)
      && (grade === "전체" || game.grade === grade)
      && (content === "전체" || game.content === content);
  });

  $("libraryCount").textContent = `${games.length}개`;
  const grid = $("gameGrid");
  grid.innerHTML = "";

  if (!games.length) {
    grid.innerHTML = '<div class="panel empty-note">조건에 맞는 게임이 아직 없어요.</div>';
    return;
  }

  games.forEach((game) => {
    const card = document.createElement("button");
    card.className = "game-card";
    card.type = "button";
    card.dataset.gameId = game.id;
    card.innerHTML = `
      <span class="card-icon" aria-hidden="true">${game.icon}</span>
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <div class="tag-row">
        <span class="tag">${game.subject}</span>
        <span class="tag">${game.grade}</span>
        <span class="tag">${game.unit}</span>
        ${game.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

function chooseGame(gameId) {
  const game = GAME_LIBRARY.find((item) => item.id === gameId) || GAME_LIBRARY[0];
  state.selectedGame = game;
  $("selectedMeta").textContent = `${game.subject} · ${game.grade} · ${game.unit} · ${game.content}`;
  $("selectedDescription").textContent = game.description;
  $("gameMeta").textContent = `${game.subject} · ${game.grade} · ${game.unit}`;
  $("gameTitle").textContent = game.title;
  showScreen("setup");
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  document.body.classList.toggle("screen-library", name === "library");
  document.body.classList.toggle("screen-setup", name === "setup");
  document.body.classList.toggle("screen-game", name === "game");
  document.body.classList.toggle("screen-finish", name === "finish");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnToLibrary() {
  stopAutoAdvance();
  stopTimer();
  showScreen("library");
}

async function toggleFullscreen() {
  const root = document.documentElement;
  try {
    if (!document.fullscreenElement) {
      if (!root.requestFullscreen) {
        showToast("이 브라우저에서는 전체 화면 전환을 지원하지 않아요.");
        return;
      }
      await root.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    showToast("브라우저 상단의 전체 화면 허용 여부를 확인해 주세요.");
  } finally {
    updateFullscreenButton();
  }
}

function updateFullscreenButton() {
  const button = $("fullscreenBtn");
  const isFullscreen = Boolean(document.fullscreenElement);
  document.body.classList.toggle("fullscreen-mode", isFullscreen);
  button.textContent = isFullscreen ? "전체 화면 종료" : "전체 화면";
  button.setAttribute("aria-label", isFullscreen ? "전체 화면 종료" : "전체 화면으로 보기");
}

function parseRoster() {
  const names = $("studentInput").value
    .split(/[\n,，、]+/)
    .map((name) => name.trim())
    .filter(Boolean);
  return [...new Set(names)];
}

function saveRoster() {
  state.roster = parseRoster();
  localStorage.setItem("playClassName", $("className").value.trim());
  localStorage.setItem("playRoster", state.roster.join("\n"));
  renderRoster();
  showToast(`${state.roster.length}명의 학생 정보를 확인했어요.`);
}

function renderRoster() {
  const list = $("studentList");
  list.innerHTML = "";
  if (!state.roster.length) {
    list.innerHTML = '<div class="empty-note">왼쪽에 학생 이름을 입력하고<br>명단 확인을 눌러요.</div>';
    return;
  }
  state.roster.forEach((name, index) => {
    const chip = document.createElement("span");
    chip.className = "student-chip";
    chip.textContent = `${index + 1}. ${name}`;
    list.appendChild(chip);
  });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleRoster() {
  saveRoster();
  state.roster = shuffle(state.roster);
  $("studentInput").value = state.roster.join("\n");
  renderRoster();
  showToast("명단을 골고루 섞었어요.");
}

function drawPlayers() {
  saveRoster();
  const count = Number($("playerCount").value);
  if (state.roster.length < count) {
    showToast(`참가자 ${count}명을 뽑으려면 학생 이름이 ${count}명 이상 필요해요.`);
    return;
  }
  const picked = shuffle(state.roster).slice(0, count);
  state.players = picked.map((name, index) => ({ name, color: palette[index] }));
  renderSelected();
  animateDraw(picked);
}

function animateDraw(names) {
  const drawName = $("drawName");
  let steps = 0;
  const pool = shuffle(state.roster);
  clearInterval(window.drawTimer);
  window.drawTimer = setInterval(() => {
    drawName.textContent = pool[steps % pool.length];
    steps += 1;
    if (steps > 18) {
      clearInterval(window.drawTimer);
      drawName.textContent = names.join(" · ");
      burst();
      showToast("추첨 완료! 게임을 시작할 수 있어요.");
    }
  }, 70);
}

function renderSelected() {
  const grid = $("selectedGrid");
  grid.innerHTML = "";
  if (!state.players.length) {
    grid.innerHTML = '<div class="empty-note">아직 뽑힌 학생이 없어요.</div>';
    return;
  }
  state.players.forEach((player, index) => {
    const tile = document.createElement("div");
    tile.className = "player-preview";
    tile.style.color = player.color;
    tile.textContent = `${index + 1}번 ${player.name}`;
    grid.appendChild(tile);
  });
}

function startGame(keepPlayers = false) {
  if (!keepPlayers && state.players.length === 0) {
    drawPlayers();
  }
  if (!state.players.length) return;
  stopAutoAdvance();
  stopTimer();
  state.roundLimit = Number($("stageCount").value);
  state.timeLimit = Number($("timeLimit").value);
  primeAudio();
  state.scores = state.players.map(() => 0);
  state.round = 0;
  state.records = [];
  state.questionOrder = shuffle(state.selectedGame.problems).slice(0, Math.min(state.roundLimit, state.selectedGame.problems.length));
  state.current = null;
  showScreen("game");
  renderScorebar();
  loadRound();
}

function renderScorebar() {
  const scorebar = $("scorebar");
  scorebar.innerHTML = "";
  state.players.forEach((player, index) => {
    const tile = document.createElement("div");
    tile.className = "score-tile";
    tile.style.color = player.color;
    tile.innerHTML = `<div class="score-name">${player.name}</div><div class="score-points">${state.scores[index]}점</div>`;
    scorebar.appendChild(tile);
  });
}

function loadRound() {
  stopAutoAdvance();
  if (state.round >= state.questionOrder.length) {
    finishGame();
    return;
  }
  stopTimer();
  state.answered = new Set();
  state.answers = state.players.map(() => null);
  state.roundJudged = false;
  state.current = makeProblem(state.questionOrder[state.round]);
  $("roundInfo").textContent = `${state.round + 1} / ${state.questionOrder.length} 라운드`;
  $("questionType").textContent = state.current.type;
  $("questionText").textContent = state.current.text;
  $("hint").textContent = `제한 시간 ${state.timeLimit}초 안에 자기 칸의 답을 눌러요.`;
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = "판정 대기";
  renderStations();
  renderScorebar();
  startTimer();
}

function makeProblem(problem) {
  return {
    ...problem,
    options: shuffle(problem.options)
  };
}

function renderStations() {
  const stations = $("stations");
  stations.innerHTML = "";
  state.players.forEach((player, playerIndex) => {
    const station = document.createElement("article");
    station.className = "station";
    station.style.color = player.color;
    station.style.setProperty("--player-color", player.color);
    station.dataset.playerIndex = playerIndex;
    station.innerHTML = `
      <div class="station-head">
        <h3 class="station-name">${player.name}</h3>
        <span class="answered-badge">대기</span>
      </div>
      <div class="answers">
        ${state.current.options.map((option) => `<button class="answer" type="button" data-answer="${option}">${option}</button>`).join("")}
      </div>
      <div class="feedback">자기 답을 눌러요</div>
      <div class="round-result" aria-live="polite"></div>
    `;
    stations.appendChild(station);
  });
}

function chooseAnswer(event) {
  const button = event.target.closest(".answer");
  if (!button) return;
  if (state.roundJudged) return;
  const station = button.closest(".station");
  const playerIndex = Number(station.dataset.playerIndex);
  if (state.answered.has(playerIndex)) return;

  const answer = button.dataset.answer;
  const elapsedSeconds = Math.max(0, Math.round((Date.now() - state.roundStartedAt) / 1000));
  state.answered.add(playerIndex);
  state.answers[playerIndex] = {
    answer,
    elapsedSeconds,
    timedOut: false
  };
  station.classList.add("done");
  station.querySelector(".answered-badge").textContent = "완료";
  station.querySelectorAll(".answer").forEach((btn) => {
    btn.disabled = true;
  });
  button.classList.add("selected");

  const feedback = station.querySelector(".feedback");
  feedback.textContent = `${elapsedSeconds}초에 입력 완료`;

  if (state.answered.size === state.players.length) {
    judgeRound("allAnswered");
  }
}

function showRule() {
  if (!state.current) return;
  $("hint").textContent = `규칙: ${state.current.rule}`;
  showToast(state.current.rule);
}

function nextRound() {
  if (!state.current) return;
  if (!state.roundJudged) {
    judgeRound("manual");
    return;
  }
  advanceAfterResult();
}

function finishGame() {
  stopAutoAdvance();
  stopTimer();
  const ranked = state.players
    .map((player, index) => ({
      ...player,
      score: state.scores[index],
      correct: state.records.filter((record) => record.results[index]?.correct).length
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "ko"));
  const topScore = ranked[0]?.score ?? 0;
  const winners = ranked.filter((player) => player.score === topScore).map((player) => player.name);
  $("finishTitle").textContent = winners.length > 1 ? `${winners.join(" · ")} 공동 우승!` : `${winners[0]} 우승!`;
  const ranking = $("ranking");
  ranking.innerHTML = "";
  ranked.forEach((player, index) => {
    const row = document.createElement("div");
    row.className = "rank-row";
    row.style.color = player.color;
    row.innerHTML = `<span>${index + 1}위</span><span>${player.name}</span><span>${player.score}점 · ${player.correct}개</span>`;
    ranking.appendChild(row);
  });
  saveGameRecord(ranked);
  renderGameRecord(ranked);
  showScreen("finish");
  burst(80);
}

function resetPlayers() {
  stopAutoAdvance();
  stopTimer();
  showScreen("setup");
  state.players = [];
  state.scores = [];
  state.round = 0;
  $("drawName").textContent = "준비 완료!";
  renderSelected();
}

function startTimer() {
  state.roundStartedAt = Date.now();
  state.remainingSeconds = state.timeLimit;
  state.lastCountdownSecond = null;
  document.body.classList.remove("tension");
  updateTimerBadge();
  state.timerId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.roundStartedAt) / 1000);
    state.remainingSeconds = Math.max(0, state.timeLimit - elapsed);
    updateTimerBadge();
    if (state.remainingSeconds <= 0) {
      judgeRound("timeout");
    }
  }, 250);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
  $("timerBadge").classList.remove("warning");
  document.body.classList.remove("tension");
}

function stopAutoAdvance() {
  if (state.autoAdvanceId) {
    clearTimeout(state.autoAdvanceId);
    state.autoAdvanceId = null;
  }
}

function updateTimerBadge() {
  const badge = $("timerBadge");
  badge.textContent = `${state.remainingSeconds}초`;
  const isCountdown = state.remainingSeconds > 0 && state.remainingSeconds <= 5 && !state.roundJudged;
  badge.classList.toggle("warning", isCountdown);
  document.body.classList.toggle("tension", isCountdown);
  if (isCountdown && state.lastCountdownSecond !== state.remainingSeconds) {
    state.lastCountdownSecond = state.remainingSeconds;
    playCountdownSound(state.remainingSeconds);
  }
}

function playCountdownSound(second) {
  try {
    const ctx = primeAudio();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = second === 1 ? "square" : "sine";
    oscillator.frequency.value = second === 1 ? 880 : 520 + ((5 - second) * 55);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
  } catch (error) {
    // Some browsers block sound until a user gesture; the visual countdown still works.
  }
}

function primeAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    if (!state.audioContext) state.audioContext = new AudioContext();
    if (state.audioContext.state === "suspended") state.audioContext.resume();
    return state.audioContext;
  } catch (error) {
    return null;
  }
}

function judgeRound(reason) {
  if (state.roundJudged) return;
  state.roundJudged = true;
  stopTimer();
  stopAutoAdvance();

  const results = state.players.map((player, index) => {
    const submitted = state.answers[index];
    const elapsedSeconds = submitted?.elapsedSeconds ?? state.timeLimit;
    const answer = submitted?.answer ?? "시간 초과";
    const correct = submitted?.answer === state.current.answer;
    const speedBonus = correct ? Math.max(0, state.timeLimit - elapsedSeconds) : 0;
    const points = correct ? 10 + speedBonus : 0;
    state.scores[index] += points;
    return {
      name: player.name,
      answer,
      elapsedSeconds,
      correct,
      points,
      timedOut: !submitted
    };
  });

  state.records.push({
    round: state.round + 1,
    question: state.current.text,
    answer: state.current.answer,
    rule: state.current.rule,
    results
  });

  revealRoundResults(results);
  renderScorebar();
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = isFinalRound() ? "결과 화면으로 이동 중" : "다음 문제 준비 중";
  const prefix = reason === "timeout" ? "시간 종료!" : "모두 입력 완료!";
  $("hint").textContent = `${prefix} 5초 동안 결과를 확인한 뒤 자동으로 넘어갑니다. 정답은 ${state.current.answer}.`;
  showToast(`${prefix} 점수를 반영했어요.`);
  state.autoAdvanceId = setTimeout(advanceAfterResult, 5000);
}

function revealRoundResults(results) {
  document.querySelectorAll(".station").forEach((station, index) => {
    const result = results[index];
    station.classList.add("done", "show-result");
    station.querySelector(".answered-badge").textContent = result.timedOut ? "시간 초과" : "판정";
    station.querySelectorAll(".answer").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.answer === state.current.answer) btn.classList.add("correct");
      if (btn.dataset.answer === result.answer && !result.correct) btn.classList.add("wrong");
      if (btn.dataset.answer === result.answer && result.correct) btn.classList.add("selected-correct");
      if (btn.dataset.answer === result.answer && !result.correct) btn.classList.add("selected-wrong");
    });
    const feedback = station.querySelector(".feedback");
    if (result.correct) {
      feedback.textContent = `정답 · ${result.elapsedSeconds}초 · ${result.points}점`;
    } else if (result.timedOut) {
      feedback.textContent = `시간 초과 · 0점`;
    } else {
      feedback.textContent = `오답 · 정답 ${state.current.answer} · 0점`;
    }

    const resultBox = station.querySelector(".round-result");
    const totalScore = state.scores[index];
    const resultTitle = result.correct ? "정답!" : result.timedOut ? "시간 초과" : "아쉬워요";
    const resultMeta = result.correct
      ? `${result.elapsedSeconds}초 입력 · +${result.points}점`
      : result.timedOut
        ? `입력 없음 · +0점`
        : `내 답: ${result.answer} · +0점`;
    resultBox.innerHTML = `
      <div class="result-title">${resultTitle}</div>
      <div class="result-answer">정답 ${state.current.answer}</div>
      <div class="result-meta">${resultMeta}</div>
      <div class="result-score">현재 ${totalScore}점</div>
    `;
  });
}

function isFinalRound() {
  return state.round + 1 >= state.questionOrder.length;
}

function advanceAfterResult() {
  stopAutoAdvance();
  state.round += 1;
  if (state.round >= state.questionOrder.length) {
    finishGame();
    return;
  }
  loadRound();
}

function saveGameRecord(ranked) {
  const saved = JSON.parse(localStorage.getItem("playGameRecords") || "[]");
  const record = {
    playedAt: new Date().toLocaleString("ko-KR"),
    gameTitle: state.selectedGame.title,
    stages: state.questionOrder.length,
    timeLimit: state.timeLimit,
    ranking: ranked.map((player, index) => ({
      rank: index + 1,
      name: player.name,
      score: player.score,
      correct: player.correct
    }))
  };
  saved.unshift(record);
  localStorage.setItem("playGameRecords", JSON.stringify(saved.slice(0, 20)));
}

function renderGameRecord(ranked) {
  const winnerLine = ranked
    .map((player, index) => `${index + 1}위 ${player.name}: ${player.score}점, 정답 ${player.correct}개`)
    .join("<br>");
  $("gameRecord").innerHTML = `
    <div class="record-title">이번 판 기록</div>
    <div>${state.selectedGame.title} · ${state.questionOrder.length}단계 · 제한 시간 ${state.timeLimit}초</div>
    <div>${winnerLine}</div>
  `;
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function burst(count = 46) {
  const confetti = $("confetti");
  const colors = ["#facc15", "#fb7185", "#38bdf8", "#22c55e", "#a78bfa", "#f97316"];
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--x", `${(Math.random() * 220) - 110}px`);
    piece.style.animationDelay = `${Math.random() * .35}s`;
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 2300);
  }
}

function restoreSaved() {
  const savedClass = localStorage.getItem("playClassName");
  const savedRoster = localStorage.getItem("playRoster");
  if (savedClass) $("className").value = savedClass;
  if (savedRoster) $("studentInput").value = savedRoster;
  state.roster = parseRoster();
  renderRoster();
  renderSelected();
  chooseGame(GAME_LIBRARY[0].id);
  showScreen("library");
}

$("subjectFilter").addEventListener("change", renderLibrary);
$("gradeFilter").addEventListener("change", renderLibrary);
$("contentFilter").addEventListener("change", renderLibrary);
$("gameGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".game-card");
  if (card) chooseGame(card.dataset.gameId);
});
$("homeBtn").addEventListener("click", returnToLibrary);
$("fullscreenBtn").addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenButton);
$("quickStartBtn").addEventListener("click", () => chooseGame(GAME_LIBRARY[0].id));
$("backToLibraryBtn").addEventListener("click", () => showScreen("library"));
$("changeGameBtn").addEventListener("click", returnToLibrary);
$("saveRosterBtn").addEventListener("click", saveRoster);
$("shuffleRosterBtn").addEventListener("click", shuffleRoster);
$("drawBtn").addEventListener("click", drawPlayers);
$("redrawBtn").addEventListener("click", drawPlayers);
$("startGameBtn").addEventListener("click", () => startGame(false));
$("stations").addEventListener("pointerdown", chooseAnswer);
$("nextBtn").addEventListener("click", nextRound);
$("explainBtn").addEventListener("click", showRule);
$("newPlayersBtn").addEventListener("click", resetPlayers);
$("resetBtn").addEventListener("click", returnToLibrary);
$("againSameBtn").addEventListener("click", () => startGame(true));
$("finishNewBtn").addEventListener("click", resetPlayers);
$("finishLibraryBtn").addEventListener("click", returnToLibrary);

initLibrary();
restoreSaved();
