/* ============================================
   STUDENT SCHEDULE - MAIN APPLICATION
   By Amjad Shalfouh © 2026
   ============================================ */

'use strict';

// ===== THEMES DEFINITION =====
const THEMES = [
  {
    id: 'crimson',
    name: { ar: 'قرمزي', en: 'Crimson' },
    a: '#C0392B', b: '#E74C3C',
    gradient: 'linear-gradient(135deg, #C0392B 0%, #E74C3C 50%, #FF6B6B 100%)',
    cell: 'rgba(231, 76, 60, 0.08)',
    rgb: '192,57,43'
  },
  {
    id: 'ocean',
    name: { ar: 'أزرق محيط', en: 'Ocean Blue' },
    a: '#1565C0', b: '#2196F3',
    gradient: 'linear-gradient(135deg, #1565C0 0%, #2196F3 60%, #64B5F6 100%)',
    cell: 'rgba(33, 150, 243, 0.08)',
    rgb: '21,101,192'
  },
  {
    id: 'royal_blue',
    name: { ar: 'أزرق ملكي', en: 'Royal Blue' },
    a: '#0D47A1', b: '#1976D2',
    gradient: 'linear-gradient(135deg, #0A2F6E 0%, #0D47A1 50%, #1E88E5 100%)',
    cell: 'rgba(13, 71, 161, 0.08)',
    rgb: '13,71,161'
  },
  {
    id: 'emerald',
    name: { ar: 'زمردي', en: 'Emerald' },
    a: '#1B5E20', b: '#388E3C',
    gradient: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 50%, #66BB6A 100%)',
    cell: 'rgba(56, 142, 60, 0.08)',
    rgb: '27,94,32'
  },
  {
    id: 'violet',
    name: { ar: 'بنفسجي', en: 'Violet' },
    a: '#6A1B9A', b: '#8E24AA',
    gradient: 'linear-gradient(135deg, #6A1B9A 0%, #8E24AA 50%, #AB47BC 100%)',
    cell: 'rgba(142, 36, 170, 0.08)',
    rgb: '106,27,154'
  },
  {
    id: 'dark_orange',
    name: { ar: 'برتقالي داكن', en: 'Dark Orange' },
    a: '#A04000', b: '#D35400',
    gradient: 'linear-gradient(135deg, #873600 0%, #A04000 50%, #E67E22 100%)',
    cell: 'rgba(160, 64, 0, 0.09)',
    rgb: '160,64,0'
  },
  {
    id: 'amber_rust',
    name: { ar: 'برتقالي نحاسي', en: 'Copper Amber' },
    a: '#B94700', b: '#E65100',
    gradient: 'linear-gradient(135deg, #7E2D00 0%, #B94700 50%, #F39C12 100%)',
    cell: 'rgba(185, 71, 0, 0.09)',
    rgb: '185,71,0'
  },
  {
    id: 'golden',
    name: { ar: 'ذهبي / كهرماني', en: 'Golden Amber' },
    a: '#E65100', b: '#FF8F00',
    gradient: 'linear-gradient(135deg, #E65100 0%, #FF8F00 50%, #FFD54F 100%)',
    cell: 'rgba(255, 143, 0, 0.09)',
    rgb: '230,81,0'
  },
  {
    id: 'rose',
    name: { ar: 'وردي ياقوتي', en: 'Rose Ruby' },
    a: '#880E4F', b: '#E91E63',
    gradient: 'linear-gradient(135deg, #880E4F 0%, #E91E63 50%, #F48FB1 100%)',
    cell: 'rgba(233, 30, 99, 0.08)',
    rgb: '136,14,79'
  },
  {
    id: 'teal',
    name: { ar: 'فيروزي', en: 'Teal' },
    a: '#004D40', b: '#00897B',
    gradient: 'linear-gradient(135deg, #004D40 0%, #00897B 50%, #4DB6AC 100%)',
    cell: 'rgba(0, 137, 123, 0.08)',
    rgb: '0,77,64'
  },
  {
    id: 'sapphire_cyan',
    name: { ar: 'سماوي ياقوتي', en: 'Sapphire Cyan' },
    a: '#006064', b: '#0097A7',
    gradient: 'linear-gradient(135deg, #004D40 0%, #00838F 50%, #00BCD4 100%)',
    cell: 'rgba(0, 131, 143, 0.08)',
    rgb: '0,131,143'
  },
  {
    id: 'indigo',
    name: { ar: 'نيلي فاخر', en: 'Indigo' },
    a: '#1A237E', b: '#3F51B5',
    gradient: 'linear-gradient(135deg, #1A237E 0%, #3F51B5 60%, #7986CB 100%)',
    cell: 'rgba(63, 81, 181, 0.08)',
    rgb: '26,35,126'
  },
  {
    id: 'amethyst',
    name: { ar: 'خزامي داكن', en: 'Deep Amethyst' },
    a: '#4A148C', b: '#7B1FA2',
    gradient: 'linear-gradient(135deg, #38006B 0%, #4A148C 50%, #8E24AA 100%)',
    cell: 'rgba(74, 20, 140, 0.08)',
    rgb: '74,20,140'
  },
  {
    id: 'midnight',
    name: { ar: 'كحلي ليلي', en: 'Midnight Navy' },
    a: '#101C36', b: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #0B132B 0%, #1C2541 50%, #3A506B 100%)',
    cell: 'rgba(28, 37, 65, 0.08)',
    rgb: '28,37,65'
  },
  {
    id: 'coffee',
    name: { ar: 'بني موكا', en: 'Mocha Coffee' },
    a: '#3E2723', b: '#5D4037',
    gradient: 'linear-gradient(135deg, #2E1C14 0%, #4E342E 50%, #795548 100%)',
    cell: 'rgba(78, 52, 46, 0.08)',
    rgb: '78,52,46'
  },
  {
    id: 'slate',
    name: { ar: 'رمادي فضي', en: 'Slate' },
    a: '#263238', b: '#546E7A',
    gradient: 'linear-gradient(135deg, #263238 0%, #546E7A 60%, #90A4AE 100%)',
    cell: 'rgba(84, 110, 122, 0.08)',
    rgb: '38,50,56'
  },
  {
    id: 'sunset',
    name: { ar: 'غروب الشمس', en: 'Sunset' },
    a: '#BF360C', b: '#FF7043',
    gradient: 'linear-gradient(135deg, #BF360C 0%, #FF7043 45%, #FFAB91 100%)',
    cell: 'rgba(255, 112, 67, 0.08)',
    rgb: '191,54,12'
  },
  {
    id: 'aurora',
    name: { ar: 'أورورا', en: 'Aurora' },
    a: '#1565C0', b: '#7B1FA2',
    gradient: 'linear-gradient(135deg, #1565C0 0%, #7B1FA2 50%, #E91E63 100%)',
    cell: 'rgba(123, 31, 162, 0.08)',
    rgb: '21,101,192'
  },
  {
    id: 'forest',
    name: { ar: 'غابة', en: 'Forest' },
    a: '#2E7D32', b: '#558B2F',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #558B2F 50%, #9CCC65 100%)',
    cell: 'rgba(85, 139, 47, 0.08)',
    rgb: '46,125,50'
  }
];

const DAYS = ['saturday','sunday','monday','tuesday','wednesday','thursday'];

// ===== APP STATE =====
const state = {
  lang: localStorage.getItem('lang') || 'ar',
  darkMode: localStorage.getItem('darkMode') === 'true',
  theme: localStorage.getItem('theme') || 'crimson',
  bgImage: localStorage.getItem('bgImage') || null,
  settings: JSON.parse(localStorage.getItem('settings') || '{"showDoctor":true,"showRoom":true,"showGroup":true,"showDepartment":true}'),
  schedule: JSON.parse(localStorage.getItem('schedule') || 'null'),
  savedSchedules: JSON.parse(localStorage.getItem('saved_schedules') || '[]'),
  currentScheduleId: localStorage.getItem('current_schedule_id') || null,
};

// Migrate single schedule to savedSchedules if array is empty
if (state.schedule && state.savedSchedules.length === 0) {
  const initialId = state.schedule.id || `sched_${Date.now()}`;
  state.schedule.id = initialId;
  state.savedSchedules.push(JSON.parse(JSON.stringify(state.schedule)));
  state.currentScheduleId = initialId;
  localStorage.setItem('saved_schedules', JSON.stringify(state.savedSchedules));
  localStorage.setItem('current_schedule_id', initialId);
}

// Current form data (for manual or college create/edit)
let formData = {
  id: '',
  studentName: '',
  department: '',
  groupNumber: '',
  notes: '',
  mode: 'manual', // 'manual' or 'college'
  days: {},
};

// Selected courses for College mode: { courseId: groupName }
let collegeSelectedMap = {};

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const DOM = {
  body: document.body,
  sidebar: $('#sidebar'),
  sidebarOverlay: $('#sidebarOverlay'),
  sidebarClose: $('#sidebarClose'),
  menuBtn: $('#menuBtn'),
  topbar: $('#topbar'),
  topbarBackBtn: $('#topbarBackBtn'),
  topbarSavedBtn: $('#topbarSavedBtn'),
  topbarSavedCount: $('#topbarSavedCount'),
  quickDownloadBtn: $('#quickDownloadBtn'),

  // Sections
  heroSection: $('#heroSection'),
  scheduleSection: $('#scheduleSection'),
  heroZawiyaBtn: $('#heroZawiyaBtn'),
  heroManualBtn: $('#heroManualBtn'),
  heroSavedBtn: $('#heroSavedBtn'),
  heroSavedCountPill: $('#heroSavedCountPill'),

  // Schedule Display Top Nav & Buttons
  btnBackToHome: $('#btnBackToHome'),
  btnSaveToSite: $('#btnSaveToSite'),
  btnCreateNewFromSchedule: $('#btnCreateNewFromSchedule'),

  // Student Info Display (Centered)
  displayStudentName: $('#displayStudentName'),
  displayDepartment: $('#displayDepartment'),
  displayGroupName: $('#displayGroupName'),
  displayStudentNameWrap: $('#displayStudentNameWrap'),
  displayDepartmentWrap: $('#displayDepartmentWrap'),
  displayGroupWrap: $('#displayGroupWrap'),
  displayNotes: $('#displayNotes'),
  notesDisplaySection: $('#notesDisplaySection'),
  scheduleTableContainer: $('#scheduleTableContainer'),
  scheduleBgOverlay: $('#scheduleBgOverlay'),
  scheduleWrapper: $('#scheduleWrapper'),

  // Action buttons
  editBtn: $('#editBtn'),
  downloadPngBtn: $('#downloadPngBtn'),
  printBtn: $('#printBtn'),
  moreExportBtn: $('#moreExportBtn'),
  exportDropdown: $('#exportDropdown'),
  exportWordBtn: $('#exportWordBtn'),
  exportExcelBtn: $('#exportExcelBtn'),

  // Sidebar nav items
  btnZawiyaNav: $('#btnZawiyaNav'),
  btnCreateSchedule: $('#btnCreateSchedule'),
  btnSavedSchedulesNav: $('#btnSavedSchedulesNav'),
  savedCountBadgeNav: $('#savedCountBadgeNav'),
  btnEditSchedule: $('#btnEditSchedule'),
  btnDownloadSchedule: $('#btnDownloadSchedule'),
  btnTheme: $('#btnTheme'),
  btnDarkMode: $('#btnDarkMode'),
  btnLanguage: $('#btnLanguage'),
  btnSettings: $('#btnSettings'),
  darkModeToggle: $('#darkModeToggle'),
  langBadge: $('#langBadge'),

  // Manual create modal
  createModal: $('#createModal'),
  modalTitle: $('#modalTitle'),
  modalClose: $('#modalClose'),
  modalCancelBtn: $('#modalCancelBtn'),
  modalSaveBtn: $('#modalSaveBtn'),
  inputStudentName: $('#inputStudentName'),
  inputDepartment: $('#inputDepartment'),
  inputGroupNumber: $('#inputGroupNumber'),
  inputNotes: $('#inputNotes'),
  daysContainer: $('#daysContainer'),
  previewTableContainer: $('#previewTableContainer'),
  groupFieldWrap: $('#groupFieldWrap'),

  // College modal
  collegeModal: $('#collegeModal'),
  collegeModalClose: $('#collegeModalClose'),
  collegeModalCancelBtn: $('#collegeModalCancelBtn'),
  collegeGenerateBtn: $('#collegeGenerateBtn'),
  collegeStudentName: $('#collegeStudentName'),
  collegeDepartmentSelect: $('#collegeDepartmentSelect'),
  collegeNotes: $('#collegeNotes'),
  tabCoursesBtn: $('#tabCoursesBtn'),
  tabDayTimeBtn: $('#tabDayTimeBtn'),
  paneCourses: $('#paneCourses'),
  paneDayTime: $('#paneDayTime'),
  courseSearchInput: $('#courseSearchInput'),
  conflictBanner: $('#conflictBanner'),
  conflictBannerText: $('#conflictBannerText'),
  collegeCoursesList: $('#collegeCoursesList'),
  dayTimeSlotsContainer: $('#dayTimeSlotsContainer'),
  collegePreviewContainer: $('#collegePreviewContainer'),

  // Saved schedules modal
  savedSchedulesModal: $('#savedSchedulesModal'),
  savedSchedulesClose: $('#savedSchedulesClose'),
  savedSchedulesList: $('#savedSchedulesList'),
  savedModalBackBtn: $('#savedModalBackBtn'),
  savedModalCreateNewBtn: $('#savedModalCreateNewBtn'),
  savedModalSubtitle: $('#savedModalSubtitle'),

  // Theme modal
  themeModal: $('#themeModal'),
  themeModalClose: $('#themeModalClose'),
  themesGrid: $('#themesGrid'),
  bgImageInput: $('#bgImageInput'),
  removeBgBtn: $('#removeBgBtn'),
  bgPreview: $('#bgPreview'),

  // Settings modal
  settingsModal: $('#settingsModal'),
  settingsModalClose: $('#settingsModalClose'),
  departmentToggle: $('#departmentToggle'),
  groupToggle: $('#groupToggle'),
  doctorToggle: $('#doctorToggle'),
  roomToggle: $('#roomToggle'),

  // Download modal
  downloadModal: $('#downloadModal'),
  downloadModalClose: $('#downloadModalClose'),
  dl_png: $('#dl_png'),
  dl_word: $('#dl_word'),
  dl_excel: $('#dl_excel'),
  dl_print: $('#dl_print'),

  // Image Preview & Save Modal (iPhone / Mobile)
  imagePreviewModal: $('#imagePreviewModal'),
  imagePreviewClose: $('#imagePreviewClose'),
  previewImgElement: $('#previewImgElement'),
  btnShareImage: $('#btnShareImage'),
  btnDirectDownloadImg: $('#btnDirectDownloadImg'),

  toastContainer: $('#toastContainer'),
};

// ===== INITIALIZATION =====
function init() {
  applyLang(state.lang);
  applyDarkMode(state.darkMode);
  applyTheme(state.theme);
  applyBgImage(state.bgImage);
  applySettings();
  updateSavedBadges();

  // Always open on the home / hero section when loading or returning to the site
  showHeroSection();
  if (state.schedule) {
    renderScheduleDisplay();
  }

  bindEvents();
}

// ===== LANGUAGE =====
function applyLang(lang) {
  state.lang = lang;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  DOM.body.setAttribute('lang', lang);
  DOM.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  DOM.body.setAttribute('data-lang', lang);
  DOM.langBadge.textContent = lang === 'ar' ? 'AR' : 'EN';
  updateAllTexts();
}

function updateAllTexts() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const key = el.getAttribute('data-t-placeholder');
    const val = t(key);
    if (typeof val === 'string') el.setAttribute('placeholder', val);
  });
}

// ===== DARK MODE =====
function applyDarkMode(on) {
  state.darkMode = on;
  localStorage.setItem('darkMode', on);
  DOM.body.classList.toggle('dark-mode', on);
  DOM.darkModeToggle.classList.toggle('active', on);
}

// ===== THEME =====
function applyTheme(themeId) {
  state.theme = themeId;
  localStorage.setItem('theme', themeId);
  const th = THEMES.find(t => t.id === themeId) || THEMES[0];
  const r = document.documentElement;
  r.style.setProperty('--theme-a', th.a);
  r.style.setProperty('--theme-b', th.b);
  r.style.setProperty('--theme-gradient', th.gradient);
  r.style.setProperty('--theme-cell', th.cell);
  r.style.setProperty('--theme-header', th.gradient);
  r.style.setProperty('--theme-rgb', th.rgb);
}

// ===== BG IMAGE =====
function applyBgImage(dataUrl) {
  state.bgImage = dataUrl;
  localStorage.setItem('bgImage', dataUrl || '');
  const overlay = DOM.scheduleBgOverlay;
  if (dataUrl) {
    overlay.style.backgroundImage = `url(${dataUrl})`;
    overlay.classList.add('has-bg');
    DOM.bgPreview.innerHTML = `<img src="${dataUrl}" alt="bg" />`;
  } else {
    overlay.style.backgroundImage = '';
    overlay.classList.remove('has-bg');
    DOM.bgPreview.innerHTML = '';
  }
}

// ===== SETTINGS =====
function applySettings() {
  DOM.departmentToggle.classList.toggle('active', !!state.settings.showDepartment);
  DOM.groupToggle.classList.toggle('active', !!state.settings.showGroup);
  DOM.doctorToggle.classList.toggle('active', !!state.settings.showDoctor);
  DOM.roomToggle.classList.toggle('active', !!state.settings.showRoom);

  DOM.displayDepartmentWrap.style.display = state.settings.showDepartment ? '' : 'none';
  DOM.displayGroupWrap.style.display = state.settings.showGroup ? '' : 'none';
}
function saveSettings() {
  localStorage.setItem('settings', JSON.stringify(state.settings));
}

// ===== NAVIGATION / SECTIONS =====
function showHeroSection() {
  DOM.heroSection.classList.remove('hidden');
  DOM.scheduleSection.classList.add('hidden');
  DOM.topbarBackBtn.classList.add('hidden');
  updateSavedBadges();
}

function showScheduleSection() {
  DOM.heroSection.classList.add('hidden');
  DOM.scheduleSection.classList.remove('hidden');
  DOM.topbarBackBtn.classList.remove('hidden');
  updateSavedBadges();
}

function updateSavedBadges() {
  const count = state.savedSchedules.length;
  if (DOM.topbarSavedCount) DOM.topbarSavedCount.textContent = count;
  DOM.savedCountBadgeNav.textContent = count;
  DOM.heroSavedCountPill.textContent = `${count} ${state.lang === 'ar' ? 'جداول' : 'schedules'}`;
  DOM.savedModalSubtitle.textContent = state.lang === 'ar'
    ? `${count} جداول محفوظة في هذا المتصفح`
    : `${count} schedules saved on this browser`;
}

// ===== SIDEBAR =====
function openSidebar() {
  DOM.sidebar.classList.add('open');
  DOM.sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  DOM.sidebar.classList.remove('open');
  DOM.sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== MODALS =====
function openModal(modal) {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal(modal) {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ===== TOAST =====
function showToast(msg, type = '') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3000);
}

// =========================================================================
// TABLE RENDERING (WITH "لا يوجد" FOR EMPTY SLOTS & 3 SLOTS SUPPORT)
// =========================================================================
function buildTableHTML(data) {
  if (!data || !data.days) {
    return `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:0.85rem">${t('noLectures')}</div>`;
  }

  // Determine active days that have at least one lecture
  const activeDays = DAYS.filter(d => {
    const lecs = data.days[d] || [];
    return lecs.some(l => l && l.subject && l.subject.trim());
  });

  if (activeDays.length === 0) {
    return `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:0.85rem">${t('noLectures')}</div>`;
  }

  // Calculate highest slot index present (1, 2, or 3)
  let maxSlot = 1;
  activeDays.forEach(d => {
    const lecs = data.days[d] || [];
    lecs.forEach((l, idx) => {
      if (l && l.subject && l.subject.trim()) {
        const slotNum = l.slot ? Number(l.slot) : idx + 1;
        if (slotNum > maxSlot) maxSlot = slotNum;
      }
    });
  });
  const totalCols = Math.min(3, Math.max(2, maxSlot));
  const headers = t('tableHeader');

  let html = `<table class="schedule-table">`;
  html += `<thead><tr>`;
  html += `<th>${headers[0]}</th>`;
  for (let s = 1; s <= totalCols; s++) {
    html += `<th>${headers[s] || `م.${s}`}</th>`;
  }
  html += `</tr></thead><tbody>`;

  activeDays.forEach(dayKey => {
    const dayLectures = data.days[dayKey] || [];
    html += `<tr>`;
    html += `<td>${tDaysShort(dayKey)}</td>`;

    for (let s = 1; s <= totalCols; s++) {
      // Find lecture matching this slot (s)
      const lec = dayLectures.find(l => (l.slot ? Number(l.slot) === s : Number(l.index) === s - 1))
        || (dayLectures[s - 1] && !dayLectures[s - 1].slot ? dayLectures[s - 1] : null);

      if (lec && lec.subject && lec.subject.trim()) {
        html += `<td><div class="lecture-cell"><div class="lecture-item">`;
        html += `<div class="lecture-subject">${escapeHtml(lec.subject)}</div>`;
        if (lec.groupName && state.settings.showGroup) {
          html += `<div class="lecture-group-tag">${escapeHtml(lec.groupName)}</div>`;
        }
        if (lec.time) {
          html += `<div class="lecture-time">${escapeHtml(lec.time)}</div>`;
        }
        if (lec.doctor && state.settings.showDoctor) {
          html += `<div class="lecture-doctor">${escapeHtml(lec.doctor)}</div>`;
        }
        if (lec.room && state.settings.showRoom) {
          html += `<div class="lecture-room">${escapeHtml(lec.room)}</div>`;
        }
        html += `</div></div></td>`;
      } else {
        // EMPTY SLOT: WRITE "لا يوجد" AS REQUESTED
        html += `<td><div class="empty-cell"><span class="no-lecture-pill">${t('noLecture')}</span></div></td>`;
      }
    }
    html += `</tr>`;
  });

  html += `</tbody></table>`;
  return html;
}

// ===== RENDER SCHEDULE DISPLAY (CENTERED INFO & NOTES) =====
function renderScheduleDisplay() {
  if (!state.schedule) return;
  const s = state.schedule;

  // Student Name
  DOM.displayStudentName.textContent = s.studentName || '-';

  // Department
  if (state.settings.showDepartment && s.department && s.department.trim()) {
    DOM.displayDepartmentWrap.style.display = '';
    DOM.displayDepartment.textContent = s.department;
  } else {
    DOM.displayDepartmentWrap.style.display = 'none';
  }

  // Group
  if (state.settings.showGroup && s.groupNumber && s.groupNumber.toString().trim()) {
    DOM.displayGroupWrap.style.display = '';
    DOM.displayGroupName.textContent = `${t('groupPrefix')} ${s.groupNumber}`;
  } else {
    DOM.displayGroupWrap.style.display = 'none';
  }

  // Notes / Supplication (Centered)
  if (s.notes && s.notes.trim()) {
    DOM.notesDisplaySection.style.display = '';
    DOM.displayNotes.textContent = s.notes;
  } else {
    DOM.notesDisplaySection.style.display = 'none';
  }

  // Table
  DOM.scheduleTableContainer.innerHTML = buildTableHTML(s);
}

// =========================================================================
// MULTI-SCHEDULE PERSISTENCE & MANAGEMENT
// =========================================================================
function saveCurrentScheduleToSite() {
  if (!state.schedule) {
    showToast(t('noSchedule'), 'error');
    return;
  }

  if (!state.schedule.id) {
    state.schedule.id = `sched_${Date.now()}`;
  }
  state.schedule.updatedAt = Date.now();

  // Find and update or prepend
  const idx = state.savedSchedules.findIndex(item => item.id === state.schedule.id);
  if (idx >= 0) {
    state.savedSchedules[idx] = JSON.parse(JSON.stringify(state.schedule));
  } else {
    state.savedSchedules.unshift(JSON.parse(JSON.stringify(state.schedule)));
  }

  state.currentScheduleId = state.schedule.id;
  localStorage.setItem('saved_schedules', JSON.stringify(state.savedSchedules));
  localStorage.setItem('schedule', JSON.stringify(state.schedule));
  localStorage.setItem('current_schedule_id', state.schedule.id);

  updateSavedBadges();
  showToast(state.lang === 'ar' ? 'تم حفظ الجدول في الموقع بنجاح' : 'Schedule saved to site successfully', 'success');
}

function createNewSchedule() {
  // Save current active schedule first if exists
  if (state.schedule) {
    const idx = state.savedSchedules.findIndex(item => item.id === state.schedule.id);
    if (idx >= 0) {
      state.savedSchedules[idx] = JSON.parse(JSON.stringify(state.schedule));
    } else {
      state.savedSchedules.unshift(JSON.parse(JSON.stringify(state.schedule)));
    }
    localStorage.setItem('saved_schedules', JSON.stringify(state.savedSchedules));
  }

  // Close modals
  closeModal(DOM.savedSchedulesModal);
  closeModal(DOM.createModal);
  closeModal(DOM.collegeModal);

  // Show hero / mode selector
  showHeroSection();
  showToast(state.lang === 'ar' ? 'اختر طريقة إنشاء الجدول الجديد' : 'Select a method for your new schedule');
}

function openSavedSchedulesModal() {
  closeSidebar();
  renderSavedSchedulesList();
  openModal(DOM.savedSchedulesModal);
}

function renderSavedSchedulesList() {
  DOM.savedSchedulesList.innerHTML = '';
  updateSavedBadges();

  if (state.savedSchedules.length === 0) {
    DOM.savedSchedulesList.innerHTML = `
      <div class="empty-saved-state">
        <i class="fas fa-calendar-times"></i>
        <p>${t('noSavedSchedules')}</p>
      </div>
    `;
    return;
  }

  state.savedSchedules.forEach((item, index) => {
    // Count total lectures
    let count = 0;
    if (item.days) {
      Object.keys(item.days).forEach(d => {
        (item.days[d] || []).forEach(l => {
          if (l && l.subject && l.subject.trim()) count++;
        });
      });
    }

    const dateStr = item.updatedAt ? new Date(item.updatedAt).toLocaleDateString(state.lang === 'ar' ? 'ar-LY' : 'en-US') : '';

    const card = document.createElement('div');
    card.className = 'saved-schedule-card';
    card.innerHTML = `
      <div class="saved-card-info">
        <div class="saved-card-title">${escapeHtml(item.studentName || `${t('appName')} ${index + 1}`)}</div>
        <div class="saved-card-meta">
          ${item.department ? `<span><i class="fas fa-layer-group"></i> ${escapeHtml(item.department)}</span>` : ''}
          ${item.groupNumber ? `<span><i class="fas fa-users"></i> ${escapeHtml(item.groupNumber)}</span>` : ''}
          <span><i class="fas fa-book"></i> ${count} ${t('lecture')}</span>
          ${dateStr ? `<span><i class="fas fa-clock"></i> ${dateStr}</span>` : ''}
        </div>
      </div>
      <div class="saved-card-actions">
        <button class="saved-btn-action saved-btn-open" data-id="${item.id}">
          <i class="fas fa-eye"></i> ${t('openSchedule')}
        </button>
        <button class="saved-btn-action saved-btn-delete" data-id="${item.id}" title="${t('deleteSchedule')}">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    // Click to open
    card.querySelector('.saved-btn-open').addEventListener('click', () => {
      loadSavedSchedule(item.id);
    });

    // Click to delete
    card.querySelector('.saved-btn-delete').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteSavedSchedule(item.id);
    });

    DOM.savedSchedulesList.appendChild(card);
  });
}

function loadSavedSchedule(id) {
  const target = state.savedSchedules.find(s => s.id === id);
  if (!target) return;

  state.schedule = JSON.parse(JSON.stringify(target));
  state.currentScheduleId = target.id;
  localStorage.setItem('schedule', JSON.stringify(state.schedule));
  localStorage.setItem('current_schedule_id', target.id);

  closeModal(DOM.savedSchedulesModal);
  showScheduleSection();
  renderScheduleDisplay();
  showToast(t('saved'), 'success');
}

function deleteSavedSchedule(id) {
  if (!confirm(t('confirmDelete'))) return;

  state.savedSchedules = state.savedSchedules.filter(s => s.id !== id);
  localStorage.setItem('saved_schedules', JSON.stringify(state.savedSchedules));

  if (state.schedule && state.schedule.id === id) {
    if (state.savedSchedules.length > 0) {
      loadSavedSchedule(state.savedSchedules[0].id);
    } else {
      state.schedule = null;
      localStorage.removeItem('schedule');
      showHeroSection();
    }
  }

  renderSavedSchedulesList();
  updateSavedBadges();
  showToast(state.lang === 'ar' ? 'تم حذف الجدول بنجاح' : 'Schedule deleted', 'success');
}

// =========================================================================
// COLLEGE MODE: كلية تقنية المعلومات - الزاوية
// =========================================================================
function openCollegeModal(editMode = false) {
  closeSidebar();
  collegeSelectedMap = {};

  if (editMode && state.schedule && state.schedule.mode === 'college') {
    formData = JSON.parse(JSON.stringify(state.schedule));
    DOM.collegeStudentName.value = formData.studentName || '';
    DOM.collegeDepartmentSelect.value = formData.department || 'هندسة البرمجيات';
    DOM.collegeNotes.value = formData.notes || '';

    // Reconstruct selected courses
    if (formData.days) {
      Object.keys(formData.days).forEach(d => {
        (formData.days[d] || []).forEach(l => {
          if (l && l.courseId && l.groupName) {
            collegeSelectedMap[l.courseId] = l.groupName;
          }
        });
      });
    }
  } else {
    formData = {
      id: `sched_${Date.now()}`,
      studentName: '',
      department: DOM.collegeDepartmentSelect.value || 'هندسة البرمجيات',
      groupNumber: '',
      notes: '',
      mode: 'college',
      days: {}
    };
    DOM.collegeStudentName.value = '';
    DOM.collegeNotes.value = '';
  }

  renderCollegeCourseList();
  renderDayTimeSlotsTab();
  updateCollegePreview();

  openModal(DOM.collegeModal);
}

function renderCollegeCourseList(searchTerm = '') {
  DOM.collegeCoursesList.innerHTML = '';
  const courses = CollegeHelper.getCourses();
  const term = searchTerm.trim().toLowerCase();

  const filtered = courses.filter(c => {
    if (!term) return true;
    return c.name.toLowerCase().includes(term) || (c.code && c.code.toLowerCase().includes(term));
  });

  if (filtered.length === 0) {
    DOM.collegeCoursesList.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:0.85rem">لا توجد مواد مطابقة للبحث</div>`;
    return;
  }

  filtered.forEach(course => {
    const isSelected = !!collegeSelectedMap[course.id];
    const selectedGroup = collegeSelectedMap[course.id] || (course.groups[0] ? course.groups[0].groupName : '');

    const card = document.createElement('div');
    card.className = `course-card-item ${isSelected ? 'selected' : ''}`;

    const optionsHtml = course.groups.map(g => {
      return `<option value="${g.groupName}" ${selectedGroup === g.groupName ? 'selected' : ''}>
        ${g.groupName} (${tDaysShort(g.day)} م.${g.slot} • ${g.time})
      </option>`;
    }).join('');

    card.innerHTML = `
      <div class="course-card-main">
        <div class="course-card-check">
          ${isSelected ? '<i class="fas fa-check"></i>' : ''}
        </div>
        <div class="course-card-details">
          <div class="course-card-title">${escapeHtml(course.name)}</div>
          <div class="course-card-code">${course.groups.length} ${course.groups.length === 1 ? 'مجموعة متاحة' : 'مجموعات متاحة'}</div>
        </div>
      </div>
      <select class="course-group-select" ${!isSelected ? 'disabled style="opacity:0.6"' : ''}>
        ${optionsHtml}
      </select>
    `;

    // Toggle select course
    card.querySelector('.course-card-main').addEventListener('click', () => {
      if (collegeSelectedMap[course.id]) {
        delete collegeSelectedMap[course.id];
      } else {
        collegeSelectedMap[course.id] = card.querySelector('.course-group-select').value;
      }
      renderCollegeCourseList(DOM.courseSearchInput.value);
      updateCollegePreview();
    });

    // Group change
    const select = card.querySelector('.course-group-select');
    select.addEventListener('change', (e) => {
      if (collegeSelectedMap[course.id]) {
        collegeSelectedMap[course.id] = e.target.value;
        updateCollegePreview();
      }
    });

    DOM.collegeCoursesList.appendChild(card);
  });
}

function renderDayTimeSlotsTab() {
  DOM.dayTimeSlotsContainer.innerHTML = '';

  DAYS.forEach(dayKey => {
    const row = document.createElement('div');
    row.className = 'daytime-row';

    let slotsHtml = `<div class="daytime-row-title">${tDays(dayKey)}</div>`;
    slotsHtml += `<div class="daytime-slots-grid">`;

    for (let slot = 1; slot <= 3; slot++) {
      const lecturesInSlot = CollegeHelper.getLecturesBySlot(dayKey, slot);
      let options = `<option value="">م.${slot}: (فارغ - لا يوجد)</option>`;
      lecturesInSlot.forEach(item => {
        options += `<option value="${item.courseId}__${item.groupName}">
          ${escapeHtml(item.courseName)} - ${escapeHtml(item.groupName)}
        </option>`;
      });

      slotsHtml += `
        <select class="daytime-slot-select" data-day="${dayKey}" data-slot="${slot}">
          ${options}
        </select>
      `;
    }
    slotsHtml += `</div>`;
    row.innerHTML = slotsHtml;

    // Bind slot selects
    row.querySelectorAll('.daytime-slot-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
          const [cId, gName] = val.split('__');
          collegeSelectedMap[cId] = gName;
        }
        renderCollegeCourseList(DOM.courseSearchInput.value);
        updateCollegePreview();
      });
    });

    DOM.dayTimeSlotsContainer.appendChild(row);
  });
}

function updateCollegePreview() {
  const selectedArr = Object.keys(collegeSelectedMap).map(cId => ({
    courseId: cId,
    groupName: collegeSelectedMap[cId]
  }));

  const validation = CollegeHelper.validateSelection(selectedArr);

  // Show/hide conflict banner
  if (!validation.isValid && validation.conflicts.length > 0) {
    DOM.conflictBanner.classList.remove('hidden');
    const c = validation.conflicts[0];
    DOM.conflictBannerText.textContent = `${t('conflictWarning')} (${tDaysShort(c.day)} م.${c.slot}: ${c.course1} مع ${c.course2})`;
  } else {
    DOM.conflictBanner.classList.add('hidden');
  }

  // Construct temporary schedule data for preview
  const previewDays = {};
  DAYS.forEach(d => { previewDays[d] = []; });

  validation.items.forEach(item => {
    if (!previewDays[item.day]) previewDays[item.day] = [];
    previewDays[item.day].push({
      slot: item.slot,
      subject: item.courseName,
      groupName: item.groupName,
      time: item.time,
      doctor: item.doctor,
      room: item.room,
      courseId: item.courseId
    });
  });

  const previewData = {
    days: previewDays
  };

  DOM.collegePreviewContainer.innerHTML = buildTableHTML(previewData);
}

function generateCollegeSchedule() {
  const name = DOM.collegeStudentName.value.trim();
  if (!name) {
    showToast(t('studentRequired'), 'error');
    DOM.collegeStudentName.focus();
    return;
  }

  const selectedArr = Object.keys(collegeSelectedMap).map(cId => ({
    courseId: cId,
    groupName: collegeSelectedMap[cId]
  }));

  if (selectedArr.length === 0) {
    showToast(state.lang === 'ar' ? 'يرجى اختيار مادة واحدة على الأقل' : 'Please select at least one course', 'error');
    return;
  }

  const validation = CollegeHelper.validateSelection(selectedArr);
  if (!validation.isValid && validation.conflicts.length > 0) {
    const c = validation.conflicts[0];
    showToast(`${t('conflictWarning')} (${tDaysShort(c.day)} م.${c.slot})`, 'error');
  }

  // Build final days schedule
  const finalDays = {};
  DAYS.forEach(d => { finalDays[d] = []; });

  validation.items.forEach(item => {
    if (!finalDays[item.day]) finalDays[item.day] = [];
    finalDays[item.day].push({
      slot: item.slot,
      subject: item.courseName,
      groupName: item.groupName,
      time: item.time,
      doctor: item.doctor,
      room: item.room,
      courseId: item.courseId
    });
  });

  const newSchedule = {
    id: formData.id || `sched_${Date.now()}`,
    studentName: name,
    department: DOM.collegeDepartmentSelect.value || 'هندسة البرمجيات',
    groupNumber: '',
    notes: DOM.collegeNotes.value.trim(),
    mode: 'college',
    updatedAt: Date.now(),
    days: finalDays
  };

  state.schedule = newSchedule;
  saveCurrentScheduleToSite();

  closeModal(DOM.collegeModal);
  showScheduleSection();
  renderScheduleDisplay();
  showToast(t('saved'), 'success');
}

// =========================================================================
// MANUAL CREATE / EDIT SCHEDULE FORM
// =========================================================================
function openManualModal(editMode = false) {
  closeSidebar();
  formData = editMode && state.schedule
    ? JSON.parse(JSON.stringify(state.schedule))
    : {
        id: `sched_${Date.now()}`,
        studentName: '',
        department: '',
        groupNumber: '',
        notes: '',
        mode: 'manual',
        days: {}
      };

  DOM.modalTitle.setAttribute('data-t', editMode ? 'editSchedule' : 'createSchedule');
  DOM.modalTitle.textContent = t(editMode ? 'editSchedule' : 'createSchedule');

  DOM.inputStudentName.value = formData.studentName || '';
  DOM.inputDepartment.value = formData.department || '';
  DOM.inputGroupNumber.value = formData.groupNumber || '';
  DOM.inputNotes.value = formData.notes || '';

  buildManualDaysForm();
  updateManualPreview();
  openModal(DOM.createModal);
}

function buildManualDaysForm() {
  DOM.daysContainer.innerHTML = '';

  DAYS.forEach(dayKey => {
    const dayName = tDays(dayKey);
    const dayLectures = formData.days[dayKey] || [];
    const block = document.createElement('div');
    block.className = 'day-block';
    block.setAttribute('data-day', dayKey);

    const validLecs = dayLectures.filter(l => l && l.subject && l.subject.trim());

    block.innerHTML = `
      <div class="day-header">
        <div class="day-name">
          <span class="day-dot"></span>
          ${dayName}
        </div>
        <div class="day-lectures-count" id="count-${dayKey}">${validLecs.length} ${t('lecture')}</div>
        <i class="fas fa-chevron-down day-toggle-icon"></i>
      </div>
      <div class="day-lectures" id="lectures-${dayKey}">
        ${buildManualSlots(dayKey, dayLectures)}
      </div>
    `;

    DOM.daysContainer.appendChild(block);

    block.querySelector('.day-header').addEventListener('click', () => {
      block.classList.toggle('open');
    });

    if (validLecs.length > 0) block.classList.add('open');

    // Bind inputs for slots 1, 2, 3
    for (let slot = 1; slot <= 3; slot++) {
      bindManualSlotInputs(dayKey, slot);
    }
  });
}

function buildManualSlots(dayKey, dayLectures) {
  let html = '';
  for (let slot = 1; slot <= 3; slot++) {
    const lec = dayLectures.find(l => Number(l.slot) === slot) || dayLectures[slot - 1] || {};
    const showDr = state.settings.showDoctor;
    const showRm = state.settings.showRoom;

    html += `
      <div class="lecture-form-item" id="slot-wrap-${dayKey}-${slot}">
        <div class="lecture-form-num">${tLectureNum(slot)}</div>
        <div class="lecture-mini-grid">
          <div class="full-width">
            <input type="text" id="subj-${dayKey}-${slot}" placeholder="${t('subjectPH')}"
              value="${escapeHtml(lec.subject || '')}" />
          </div>
          ${showDr ? `<input type="text" id="doc-${dayKey}-${slot}" placeholder="${t('doctorPH')}"
            value="${escapeHtml(lec.doctor || '')}" />` : ''}
          ${showRm ? `<input type="text" id="room-${dayKey}-${slot}" placeholder="${t('roomPH')}"
            value="${escapeHtml(lec.room || '')}" />` : ''}
          <div class="${!showDr && !showRm ? 'full-width' : ''}">
            <input type="text" id="time-${dayKey}-${slot}" placeholder="${t('timePH')}"
              value="${escapeHtml(lec.time || '')}" />
          </div>
        </div>
      </div>
    `;
  }
  return html;
}

function bindManualSlotInputs(dayKey, slot) {
  const getVal = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };

  const onInput = () => {
    if (!formData.days[dayKey]) formData.days[dayKey] = [];
    let lec = formData.days[dayKey].find(l => Number(l.slot) === slot);
    if (!lec) {
      lec = { slot: slot, subject: '', doctor: '', room: '', time: '' };
      formData.days[dayKey].push(lec);
    }
    lec.subject = getVal(`subj-${dayKey}-${slot}`);
    lec.doctor = getVal(`doc-${dayKey}-${slot}`);
    lec.room = getVal(`room-${dayKey}-${slot}`);
    lec.time = getVal(`time-${dayKey}-${slot}`);

    const countEl = document.getElementById(`count-${dayKey}`);
    const validCount = formData.days[dayKey].filter(l => l.subject && l.subject.trim()).length;
    if (countEl) countEl.textContent = `${validCount} ${t('lecture')}`;

    updateManualPreview();
  };

  const bindEl = (id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', onInput);
  };

  bindEl(`subj-${dayKey}-${slot}`);
  bindEl(`doc-${dayKey}-${slot}`);
  bindEl(`room-${dayKey}-${slot}`);
  bindEl(`time-${dayKey}-${slot}`);
}

function updateManualPreview() {
  formData.studentName = DOM.inputStudentName.value;
  formData.department = DOM.inputDepartment.value;
  formData.groupNumber = DOM.inputGroupNumber.value;
  formData.notes = DOM.inputNotes.value;

  DOM.previewTableContainer.innerHTML = buildTableHTML(formData);
}

function saveManualSchedule() {
  const name = DOM.inputStudentName.value.trim();
  if (!name) {
    showToast(t('studentRequired'), 'error');
    DOM.inputStudentName.focus();
    return;
  }

  formData.studentName = name;
  formData.department = DOM.inputDepartment.value.trim();
  formData.groupNumber = DOM.inputGroupNumber.value.trim();
  formData.notes = DOM.inputNotes.value.trim();
  formData.mode = 'manual';

  // Clean empty days
  DAYS.forEach(dayKey => {
    if (formData.days[dayKey]) {
      formData.days[dayKey] = formData.days[dayKey].filter(l => l.subject && l.subject.trim());
    }
  });

  state.schedule = JSON.parse(JSON.stringify(formData));
  saveCurrentScheduleToSite();

  closeModal(DOM.createModal);
  showScheduleSection();
  renderScheduleDisplay();
  showToast(t('saved'), 'success');
}

// =========================================================================
// EXPORTS (PNG, WORD, EXCEL, PRINT)
// =========================================================================
async function exportPNG() {
  if (!state.schedule) { showToast(t('noSchedule'), 'error'); return; }

  const exportEl = buildExportElement();
  document.body.appendChild(exportEl);

  try {
    const canvas = await html2canvas(exportEl, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
    });

    if (document.body.contains(exportEl)) {
      document.body.removeChild(exportEl);
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const fileName = `schedule-${Date.now()}.png`;

    canvas.toBlob(async (blob) => {
      if (!blob) {
        const dataUrl = canvas.toDataURL('image/png');
        handleImageResult(dataUrl, null, fileName, isIOS);
        return;
      }
      const url = URL.createObjectURL(blob);
      handleImageResult(url, blob, fileName, isIOS);
    }, 'image/png');

  } catch (e) {
    if (document.body.contains(exportEl)) document.body.removeChild(exportEl);
    showToast(t('imageError'), 'error');
    console.error(e);
  }
}

async function handleImageResult(imgUrl, blob, fileName, isIOS) {
  // If supported, try native Web Share API (Primary for iOS / iPhone Photos library)
  if (blob && navigator.canShare) {
    try {
      const file = new File([blob], fileName, { type: 'image/png' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'جدول المحاضرات'
        });
        showToast(t('imageSaved'), 'success');
        return;
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        // User closed share dialog, don't show error
        return;
      }
      console.log('Native share bypassed, opening preview modal:', err);
    }
  }

  // Populate preview modal
  if (DOM.previewImgElement) DOM.previewImgElement.src = imgUrl;
  if (DOM.btnDirectDownloadImg) {
    DOM.btnDirectDownloadImg.href = imgUrl;
    DOM.btnDirectDownloadImg.download = fileName;
  }

  if (DOM.btnShareImage) {
    if (blob && navigator.canShare) {
      DOM.btnShareImage.style.display = 'inline-flex';
      DOM.btnShareImage.onclick = async () => {
        try {
          const file = new File([blob], fileName, { type: 'image/png' });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: 'جدول المحاضرات' });
          }
        } catch (e) {}
      };
    } else {
      DOM.btnShareImage.style.display = 'none';
    }
  }

  // On iOS or mobile devices, always open the preview modal so user can long-press "Save to Photos"
  if (isIOS || window.innerWidth < 768) {
    openModal(DOM.imagePreviewModal);
    showToast(t('imageSaved'), 'success');
  } else {
    // Desktop: Direct browser download
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(t('imageSaved'), 'success');
    setTimeout(() => URL.revokeObjectURL(imgUrl), 10000);
  }
}

function buildExportElement() {
  const wrap = document.createElement('div');
  wrap.style.cssText = `
    position: fixed;
    top: -9999px; left: -9999px;
    width: 520px;
    background: ${document.body.classList.contains('dark-mode') ? '#161b2e' : '#ffffff'};
    border-radius: 18px;
    overflow: hidden;
    font-family: Cairo, Tajawal, sans-serif;
    direction: ${state.lang === 'ar' ? 'rtl' : 'ltr'};
    padding: 0;
    text-align: center;
  `;

  const s = state.schedule;
  const th = THEMES.find(t => t.id === state.theme) || THEMES[0];

  // Header (CENTERED)
  const header = document.createElement('div');
  header.style.cssText = `
    background: ${th.gradient};
    padding: 22px 24px;
    color: #fff;
    text-align: center;
  `;

  let subInfo = [];
  if (s.department && state.settings.showDepartment) subInfo.push(s.department);
  if (s.groupNumber && state.settings.showGroup) subInfo.push(`${t('groupPrefix')} ${s.groupNumber}`);

  header.innerHTML = `
    <div style="font-size:20px;font-weight:900;margin-bottom:4px;text-align:center;">${escapeHtml(s.studentName || '')}</div>
    ${subInfo.length > 0 ? `<div style="font-size:13px;opacity:0.9;text-align:center;font-weight:600;">${escapeHtml(subInfo.join(' • '))}</div>` : ''}
    ${s.notes ? `<div style="font-size:12px;opacity:0.85;margin-top:8px;padding:6px 14px;background:rgba(255,255,255,0.15);border-radius:12px;display:inline-block;">${escapeHtml(s.notes)}</div>` : ''}
  `;
  wrap.appendChild(header);

  // Table wrapper
  const tableWrap = document.createElement('div');
  tableWrap.style.cssText = `padding: 16px; position: relative;`;

  if (state.bgImage) {
    tableWrap.style.backgroundImage = `url(${state.bgImage})`;
    tableWrap.style.backgroundSize = 'cover';
    tableWrap.style.backgroundPosition = 'center';
  }

  const tableInner = document.createElement('div');
  tableInner.style.cssText = `position: relative; z-index: 1;`;
  tableInner.innerHTML = buildTableHTML(s);
  tableWrap.appendChild(tableInner);
  wrap.appendChild(tableWrap);

  // Watermark
  const wm = document.createElement('div');
  wm.style.cssText = `
    text-align: center;
    padding: 10px;
    font-size: 11px;
    color: ${document.body.classList.contains('dark-mode') ? '#6b7a99' : '#888'};
    border-top: 1px solid ${document.body.classList.contains('dark-mode') ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'};
    font-style: italic;
  `;
  wm.textContent = t('watermark');
  wrap.appendChild(wm);

  return wrap;
}

// ===== EXPORT: WORD =====
async function exportWord() {
  if (!state.schedule) { showToast(t('noSchedule'), 'error'); return; }
  const s = state.schedule;
  const { Document, Paragraph, Table, TableRow, TableCell, TextRun, AlignmentType, WidthType, Packer, HeadingLevel } = docx;

  const th = THEMES.find(t2 => t2.id === state.theme) || THEMES[0];
  const thColor = th.a.replace('#', '');

  const activeDays = DAYS.filter(d => {
    const lecs = s.days[d] || [];
    return lecs.some(l => l && l.subject && l.subject.trim());
  });

  const rows = [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: t('tableHeader')[0], bold: true, color: 'FFFFFF', size: 22 })], alignment: AlignmentType.CENTER })],
          shading: { fill: thColor },
          margins: { top: 80, bottom: 80, left: 80, right: 80 },
        }),
        ...[1,2,3].map(i => new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: t('tableHeader')[i] || `م.${i}`, bold: true, color: 'FFFFFF', size: 22 })], alignment: AlignmentType.CENTER })],
          shading: { fill: thColor },
          margins: { top: 80, bottom: 80, left: 80, right: 80 },
        }))
      ],
    }),
    ...activeDays.map(dayKey => {
      const dayLectures = s.days[dayKey] || [];
      return new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: tDays(dayKey), bold: true, size: 20 })], alignment: AlignmentType.CENTER })],
            margins: { top: 60, bottom: 60, left: 60, right: 60 },
          }),
          ...[1,2,3].map(slotNum => {
            const lec = dayLectures.find(l => Number(l.slot) === slotNum) || dayLectures[slotNum - 1];
            const lines = [];
            if (lec && lec.subject && lec.subject.trim()) {
              lines.push(new TextRun({ text: lec.subject, bold: true, size: 18 }));
              if (lec.time) lines.push(new TextRun({ text: `\n${lec.time}`, size: 16, color: thColor }));
              if (lec.doctor && state.settings.showDoctor) lines.push(new TextRun({ text: `\n${lec.doctor}`, size: 16 }));
              if (lec.room && state.settings.showRoom) lines.push(new TextRun({ text: `\n${lec.room}`, size: 16, color: '888888' }));
            }
            return new TableCell({
              children: [new Paragraph({
                children: (lec && lec.subject && lec.subject.trim())
                  ? lines
                  : [new TextRun({ text: t('noLecture'), color: 'AAAAAA', italics: true, size: 16 })],
                alignment: AlignmentType.CENTER
              })],
              margins: { top: 60, bottom: 60, left: 60, right: 60 },
            });
          })
        ],
      });
    })
  ];

  let metaLine = [];
  if (s.department && state.settings.showDepartment) metaLine.push(s.department);
  if (s.groupNumber && state.settings.showGroup) metaLine.push(`${t('groupPrefix')} ${s.groupNumber}`);

  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({
          children: [new TextRun({ text: s.studentName || '', bold: true, size: 34, color: thColor })],
          alignment: AlignmentType.CENTER
        }),
        metaLine.length > 0 ? new Paragraph({
          children: [new TextRun({ text: metaLine.join(' - '), size: 22, bold: true })],
          alignment: AlignmentType.CENTER
        }) : new Paragraph({}),
        s.notes ? new Paragraph({
          children: [new TextRun({ text: s.notes, italics: true, size: 20 })],
          alignment: AlignmentType.CENTER
        }) : new Paragraph({}),
        new Paragraph({}),
        new Table({ rows, width: { size: 100, type: WidthType.PERCENTAGE } }),
        new Paragraph({}),
        new Paragraph({
          children: [new TextRun({ text: t('watermark'), italics: true, size: 16, color: 'AAAAAA' })],
          alignment: AlignmentType.CENTER
        }),
      ]
    }]
  });

  const blob = await Packer.toBlob(doc);
  downloadBlob(blob, `schedule-${Date.now()}.docx`, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  showToast(t('saved'), 'success');
}

// ===== EXPORT: EXCEL =====
function exportExcel() {
  if (!state.schedule) { showToast(t('noSchedule'), 'error'); return; }
  const s = state.schedule;

  const activeDays = DAYS.filter(d => {
    const lecs = s.days[d] || [];
    return lecs.some(l => l && l.subject && l.subject.trim());
  });

  const wsData = [];
  wsData.push([s.studentName || '', s.department || '', s.groupNumber ? `${t('groupPrefix')} ${s.groupNumber}` : '', '']);
  if (s.notes) wsData.push([s.notes, '', '', '']);
  wsData.push([]);
  wsData.push([t('tableHeader')[0], t('tableHeader')[1], t('tableHeader')[2], t('tableHeader')[3]]);

  activeDays.forEach(dayKey => {
    const dayLectures = s.days[dayKey] || [];
    const row = [tDays(dayKey)];
    for (let slot = 1; slot <= 3; slot++) {
      const lec = dayLectures.find(l => Number(l.slot) === slot) || dayLectures[slot - 1];
      if (lec && lec.subject && lec.subject.trim()) {
        let cell = lec.subject;
        if (lec.time) cell += ` | ${lec.time}`;
        if (lec.doctor && state.settings.showDoctor) cell += ` | ${lec.doctor}`;
        if (lec.room && state.settings.showRoom) cell += ` | ${lec.room}`;
        row.push(cell);
      } else {
        row.push(t('noLecture'));
      }
    }
    wsData.push(row);
  });

  wsData.push([]);
  wsData.push([t('watermark'), '', '', '']);

  const ws = XLSX.utils.aoa_to_sheet(wsData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, state.lang === 'ar' ? 'الجدول' : 'Schedule');
  XLSX.writeFile(wb, `schedule-${Date.now()}.xlsx`);
  showToast(t('saved'), 'success');
}

// ===== PRINT =====
function printSchedule() {
  window.print();
}

// ===== DOWNLOAD BLOB =====
function downloadBlob(blob, name, type) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

// ===== ESCAPE HTML =====
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// =========================================================================
// THEME MODAL
// =========================================================================
function buildThemesGrid() {
  DOM.themesGrid.innerHTML = '';
  THEMES.forEach(th => {
    const card = document.createElement('div');
    card.className = `theme-card ${state.theme === th.id ? 'active' : ''}`;
    card.innerHTML = `
      <div class="theme-preview" style="background:${th.gradient}"></div>
      <div class="theme-name">${state.lang === 'ar' ? th.name.ar : th.name.en}</div>
      <div class="theme-check"><i class="fas fa-check"></i></div>
    `;
    card.addEventListener('click', () => {
      applyTheme(th.id);
      document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderScheduleDisplay();
    });
    DOM.themesGrid.appendChild(card);
  });
}

// =========================================================================
// BIND EVENTS
// =========================================================================
function bindEvents() {
  // Sidebar
  DOM.menuBtn.addEventListener('click', openSidebar);
  DOM.sidebarClose.addEventListener('click', closeSidebar);
  DOM.sidebarOverlay.addEventListener('click', closeSidebar);

  // Topbar Navigation & Back
  DOM.topbarBackBtn.addEventListener('click', showHeroSection);
  DOM.btnBackToHome.addEventListener('click', showHeroSection);

  // Save to Site & New Schedule
  DOM.btnSaveToSite.addEventListener('click', saveCurrentScheduleToSite);
  DOM.btnCreateNewFromSchedule.addEventListener('click', createNewSchedule);
  if (DOM.topbarSavedBtn) DOM.topbarSavedBtn.addEventListener('click', openSavedSchedulesModal);
  DOM.btnSavedSchedulesNav.addEventListener('click', openSavedSchedulesModal);
  DOM.heroSavedBtn.addEventListener('click', openSavedSchedulesModal);

  // Hero Mode Choices
  DOM.heroZawiyaBtn.addEventListener('click', () => openCollegeModal(false));
  DOM.btnZawiyaNav.addEventListener('click', () => openCollegeModal(false));
  DOM.heroManualBtn.addEventListener('click', () => openManualModal(false));
  DOM.btnCreateSchedule.addEventListener('click', () => openManualModal(false));

  // Edit current schedule
  DOM.editBtn.addEventListener('click', () => {
    if (!state.schedule) return;
    if (state.schedule.mode === 'college') openCollegeModal(true);
    else openManualModal(true);
  });
  DOM.btnEditSchedule.addEventListener('click', () => {
    closeSidebar();
    if (!state.schedule) { showToast(t('noSchedule'), 'error'); return; }
    if (state.schedule.mode === 'college') openCollegeModal(true);
    else openManualModal(true);
  });

  // College Modal events
  DOM.collegeModalClose.addEventListener('click', () => closeModal(DOM.collegeModal));
  DOM.collegeModalCancelBtn.addEventListener('click', () => closeModal(DOM.collegeModal));
  DOM.collegeGenerateBtn.addEventListener('click', generateCollegeSchedule);

  DOM.tabCoursesBtn.addEventListener('click', () => {
    DOM.tabCoursesBtn.classList.add('active');
    DOM.tabDayTimeBtn.classList.remove('active');
    DOM.paneCourses.classList.remove('hidden');
    DOM.paneDayTime.classList.add('hidden');
  });
  DOM.tabDayTimeBtn.addEventListener('click', () => {
    DOM.tabDayTimeBtn.classList.add('active');
    DOM.tabCoursesBtn.classList.remove('active');
    DOM.paneDayTime.classList.remove('hidden');
    DOM.paneCourses.classList.add('hidden');
  });
  DOM.courseSearchInput.addEventListener('input', (e) => {
    renderCollegeCourseList(e.target.value);
  });

  // Manual Modal events
  DOM.modalClose.addEventListener('click', () => closeModal(DOM.createModal));
  DOM.modalCancelBtn.addEventListener('click', () => closeModal(DOM.createModal));
  DOM.modalSaveBtn.addEventListener('click', saveManualSchedule);

  // Saved Schedules Modal
  DOM.savedSchedulesClose.addEventListener('click', () => closeModal(DOM.savedSchedulesModal));
  DOM.savedModalBackBtn.addEventListener('click', () => closeModal(DOM.savedSchedulesModal));
  DOM.savedModalCreateNewBtn.addEventListener('click', createNewSchedule);

  // Theme modal
  DOM.btnTheme.addEventListener('click', () => {
    closeSidebar();
    buildThemesGrid();
    applyBgImage(state.bgImage);
    openModal(DOM.themeModal);
  });
  DOM.themeModalClose.addEventListener('click', () => closeModal(DOM.themeModal));
  DOM.bgImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      applyBgImage(ev.target.result);
      renderScheduleDisplay();
    };
    reader.readAsDataURL(file);
  });
  DOM.removeBgBtn.addEventListener('click', () => {
    applyBgImage(null);
    DOM.bgImageInput.value = '';
  });

  // Settings modal
  DOM.btnSettings.addEventListener('click', () => {
    closeSidebar();
    applySettings();
    openModal(DOM.settingsModal);
  });
  DOM.settingsModalClose.addEventListener('click', () => closeModal(DOM.settingsModal));

  DOM.departmentToggle.addEventListener('click', () => {
    state.settings.showDepartment = !state.settings.showDepartment;
    DOM.departmentToggle.classList.toggle('active', state.settings.showDepartment);
    saveSettings();
    applySettings();
    renderScheduleDisplay();
  });
  DOM.groupToggle.addEventListener('click', () => {
    state.settings.showGroup = !state.settings.showGroup;
    DOM.groupToggle.classList.toggle('active', state.settings.showGroup);
    saveSettings();
    applySettings();
    renderScheduleDisplay();
  });
  DOM.doctorToggle.addEventListener('click', () => {
    state.settings.showDoctor = !state.settings.showDoctor;
    DOM.doctorToggle.classList.toggle('active', state.settings.showDoctor);
    saveSettings();
    renderScheduleDisplay();
  });
  DOM.roomToggle.addEventListener('click', () => {
    state.settings.showRoom = !state.settings.showRoom;
    DOM.roomToggle.classList.toggle('active', state.settings.showRoom);
    saveSettings();
    renderScheduleDisplay();
  });

  // Language & Dark mode
  DOM.btnLanguage.addEventListener('click', () => {
    const newLang = state.lang === 'ar' ? 'en' : 'ar';
    applyLang(newLang);
    closeSidebar();
    if (state.schedule) renderScheduleDisplay();
    showToast(newLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English');
  });
  DOM.btnDarkMode.addEventListener('click', () => { applyDarkMode(!state.darkMode); });
  DOM.darkModeToggle.addEventListener('click', (e) => { e.stopPropagation(); applyDarkMode(!state.darkMode); });

  // Download modal
  DOM.btnDownloadSchedule.addEventListener('click', () => { closeSidebar(); openModal(DOM.downloadModal); });
  DOM.quickDownloadBtn.addEventListener('click', () => {
    if (state.schedule) openModal(DOM.downloadModal);
    else showToast(t('noSchedule'), 'error');
  });
  DOM.downloadModalClose.addEventListener('click', () => closeModal(DOM.downloadModal));
  DOM.dl_png.addEventListener('click', () => { closeModal(DOM.downloadModal); exportPNG(); });
  DOM.dl_word.addEventListener('click', () => { closeModal(DOM.downloadModal); exportWord(); });
  DOM.dl_excel.addEventListener('click', () => { closeModal(DOM.downloadModal); exportExcel(); });
  DOM.dl_print.addEventListener('click', () => { closeModal(DOM.downloadModal); printSchedule(); });

  // Action buttons
  DOM.downloadPngBtn.addEventListener('click', exportPNG);
  DOM.printBtn.addEventListener('click', printSchedule);
  DOM.moreExportBtn.addEventListener('click', () => {
    DOM.exportDropdown.classList.toggle('hidden');
  });
  DOM.exportWordBtn.addEventListener('click', () => { DOM.exportDropdown.classList.add('hidden'); exportWord(); });
  DOM.exportExcelBtn.addEventListener('click', () => { DOM.exportDropdown.classList.add('hidden'); exportExcel(); });

  // Close export dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!DOM.exportDropdown.contains(e.target) && !DOM.moreExportBtn.contains(e.target)) {
      DOM.exportDropdown.classList.add('hidden');
    }
  });

  // Image preview modal close
  if (DOM.imagePreviewClose) {
    DOM.imagePreviewClose.addEventListener('click', () => closeModal(DOM.imagePreviewModal));
  }

  // Modal overlay click to close
  [DOM.themeModal, DOM.settingsModal, DOM.downloadModal, DOM.createModal, DOM.collegeModal, DOM.savedSchedulesModal, DOM.imagePreviewModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  // Touch swipe to close sidebar
  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (DOM.sidebar.classList.contains('open')) {
      if ((state.lang === 'ar' && dx > 60) || (state.lang === 'en' && dx < -60)) closeSidebar();
    }
  }, { passive: true });
}

// ===== BOOT =====
document.addEventListener('DOMContentLoaded', init);
