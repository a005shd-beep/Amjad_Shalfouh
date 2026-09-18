/* ============================================
   TRANSLATIONS - AR / EN
   By Amjad Shalfouh © 2026
   ============================================ */

const TRANSLATIONS = {
  ar: {
    appName: 'جدول المحاضرات',
    createSchedule: 'إنشاء جدول',
    editSchedule: 'تعديل الجدول',
    downloadSchedule: 'تحميل الجدول',
    changeTheme: 'تغيير النمط',
    darkMode: 'الوضع الداكن',
    language: 'اللغة',
    settings: 'الإعدادات',

    welcomeTitle: 'مرحباً بك في جدول المحاضرات',
    welcomeDesc: 'اختر كليتك لتوليد جدولك مباشرة أو صمم جدولك يدوياً بسهولة',
    createNow: 'إنشاء جدول الآن',

    // College & Modes
    collegeZawiya: 'كلية تقنية المعلومات - الزاوية',
    collegeZawiyaShort: 'كلية تقنية المعلومات بالزاوية',
    zawiyaDesc: 'اختر المواد والمجموعات أو الأوقات وسيتم بناء الجدول تلقائياً',
    manualSchedule: 'إنشاء جدول يدوياً (لجميع الكليات)',
    manualDesc: 'إدخال يدوي للمواد والمواعيد والقاعات حسب رغبتك',
    savedSchedules: 'الجداول المحفوظة',
    savedDesc: 'فتح وتعديل الجداول السابقة المحفوظة في الموقع',
    orChooseMode: 'اختر طريقة البدء:',

    // Actions & Navigation
    back: 'رجوع',
    backToHome: 'الرجوع للرئيسية',
    saveToSite: 'حفظ في الموقع',
    createNewSchedule: 'إنشاء جدول جديد',
    deleteSchedule: 'حذف',
    openSchedule: 'فتح',
    duplicateSchedule: 'نسخ',
    confirmDelete: 'هل أنت متأكد من حذف هذا الجدول؟',
    noSavedSchedules: 'لا توجد جداول محفوظة حتى الآن.',
    scheduleCount: (n) => `${n} جداول محفوظة`,
    lastUpdated: 'آخر تحديث',

    // Form fields
    studentDetails: 'بيانات الطالب والكلية',
    studentName: 'اسم الطالب',
    studentNamePH: 'أدخل اسم الطالب',
    departmentLabel: 'القسم العلمي',
    departmentPH: 'مثال: هندسة برمجيات / عام',
    groupLabel: 'المجموعة',
    groupPH: 'رقم / اسم المجموعة (اختياري)',
    notesLabel: 'الملاحظات / الدعاء (تظهر أعلى الجدول في المنتصف)',
    notesPH: 'أدخل ملاحظاتك أو دعاء التوفيق هنا...',

    // College Schedule Builder
    courseSelectTitle: 'اختيار المواد والمجموعات',
    filterByDept: 'تصفية حسب القسم العلمي:',
    selectedCoursesCount: 'المواد المختارة',
    noCoursesSelected: 'لم يتم اختيار أي مادة بعد. يرجى اختيار المواد وتحديد المجموعة.',
    generateScheduleBtn: 'توليد الجدول تلقائياً',
    selectGroup: 'اختر المجموعة',
    conflictWarning: 'تنبيه تضارب: يوجد مادتان في نفس اليوم والتوقيت!',
    noConflicts: 'المواعيد متناسقة وبدون أي تعارض',
    searchCourse: 'ابحث عن اسم المادة أو الرمز...',
    byDayTimeMethod: 'تعبئة حسب اليوم والساعة',
    byCoursesMethod: 'اختيار المواد والمجموعات (تلقائي)',

    // Table & Days
    scheduleDays: 'أيام الجدول',
    livePreview: 'معاينة مباشرة',
    saveSchedule: 'حفظ الجدول',
    cancel: 'إلغاء',
    edit: 'تعديل',
    saveImage: 'حفظ صورة',
    print: 'طباعة',
    more: 'المزيد',
    exportWord: 'تصدير Word',
    exportExcel: 'تصدير Excel',

    chooseTheme: 'اختر النمط',
    themeNote: 'اختر لون الجدول - الموقع يبقى بألوانه الأساسية',
    customBg: 'خلفية مخصصة للجدول',
    uploadImage: 'رفع صورة',
    removeBg: 'إزالة الخلفية',

    showDoctor: 'إظهار اسم الدكتور',
    showRoom: 'إظهار رقم القاعة',
    showGroup: 'إظهار المجموعة',
    showDepartment: 'إظهار القسم',

    pngDesc: 'صورة بجودة عالية',
    wordDesc: 'ملف Word (.docx)',
    excelDesc: 'ملف Excel (.xlsx)',
    printDesc: 'طباعة مباشرة',

    days: {
      saturday: 'السبت',
      sunday: 'الأحد',
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
    },
    daysShort: {
      saturday: 'السبت',
      sunday: 'الأحد',
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
    },
    lecture: 'محاضرة',
    lectureNum: (n) => `المحاضرة ${n}`,
    addLecture: '+ إضافة محاضرة',
    subjectPH: 'اسم المادة',
    doctorPH: 'اسم الدكتور',
    roomPH: 'رقم القاعة',
    timePH: 'وقت المحاضرة',
    noLectures: 'لا توجد محاضرات',
    noLecture: 'لا يوجد',
    maxReached: 'الحد الأقصى 3 محاضرات في اليوم',
    studentRequired: 'الرجاء إدخال اسم الطالب',
    saved: 'تم الحفظ بنجاح',
    imageSaved: 'تم حفظ الصورة',
    imageError: 'حدث خطأ أثناء حفظ الصورة',
    noSchedule: 'لا يوجد جدول لتصديره',
    groupPrefix: 'المجموعة:',
    deptPrefix: 'القسم:',
    tableHeader: ['اليوم', 'م.1', 'م.2', 'م.3'],
    watermark: 'By Amjad Shalfouh © 2026 - جميع الحقوق محفوظة',
  },

  en: {
    appName: 'Lecture Schedule',
    createSchedule: 'Create Schedule',
    editSchedule: 'Edit Schedule',
    downloadSchedule: 'Download Schedule',
    changeTheme: 'Change Theme',
    darkMode: 'Dark Mode',
    language: 'Language',
    settings: 'Settings',

    welcomeTitle: 'Welcome to Lecture Schedule',
    welcomeDesc: 'Select your college to auto-generate your schedule or build it manually',
    createNow: 'Create Schedule Now',

    // College & Modes
    collegeZawiya: 'Faculty of Information Technology - Zawiya',
    collegeZawiyaShort: 'IT Faculty Zawiya',
    zawiyaDesc: 'Choose courses and groups to generate a conflict-free schedule',
    manualSchedule: 'Manual Schedule Builder (For All Colleges)',
    manualDesc: 'Enter courses, slots, and rooms manually',
    savedSchedules: 'Saved Schedules',
    savedDesc: 'Open and edit previous schedules saved on this site',
    orChooseMode: 'Choose an option to start:',

    // Actions & Navigation
    back: 'Back',
    backToHome: 'Back to Home',
    saveToSite: 'Save on Site',
    createNewSchedule: 'New Schedule',
    deleteSchedule: 'Delete',
    openSchedule: 'Open',
    duplicateSchedule: 'Duplicate',
    confirmDelete: 'Are you sure you want to delete this schedule?',
    noSavedSchedules: 'No saved schedules yet.',
    scheduleCount: (n) => `${n} saved schedules`,
    lastUpdated: 'Last updated',

    // Form fields
    studentDetails: 'Student & College Details',
    studentName: 'Student Name',
    studentNamePH: 'Enter student name',
    departmentLabel: 'Department',
    departmentPH: 'e.g. Software Engineering / General',
    groupLabel: 'Group',
    groupPH: 'Group number / name (optional)',
    notesLabel: 'Notes / Supplication (Centered above the table)',
    notesPH: 'Add your notes or prayers here...',

    // College Schedule Builder
    courseSelectTitle: 'Select Courses & Groups',
    filterByDept: 'Filter by Department:',
    selectedCoursesCount: 'Selected Courses',
    noCoursesSelected: 'No courses selected yet. Please select courses and assign groups.',
    generateScheduleBtn: 'Generate Schedule Automatically',
    selectGroup: 'Select Group',
    conflictWarning: 'Time Conflict: Two courses are scheduled in the same time slot!',
    noConflicts: 'Schedule is clear with no conflicts',
    searchCourse: 'Search course by name or code...',
    byDayTimeMethod: 'Fill by Day and Time Slot',
    byCoursesMethod: 'Select Courses & Groups (Auto)',

    // Table & Days
    scheduleDays: 'Schedule Days',
    livePreview: 'Live Preview',
    saveSchedule: 'Save Schedule',
    cancel: 'Cancel',
    edit: 'Edit',
    saveImage: 'Save Image',
    print: 'Print',
    more: 'More',
    exportWord: 'Export Word',
    exportExcel: 'Export Excel',

    chooseTheme: 'Choose Theme',
    themeNote: 'Choose table color - site colors remain fixed',
    customBg: 'Custom Table Background',
    uploadImage: 'Upload Image',
    removeBg: 'Remove Background',

    showDoctor: 'Show Doctor Name',
    showRoom: 'Show Room Number',
    showGroup: 'Show Group',
    showDepartment: 'Show Department',

    pngDesc: 'High quality image',
    wordDesc: 'Word file (.docx)',
    excelDesc: 'Excel file (.xlsx)',
    printDesc: 'Print directly',

    days: {
      saturday: 'Saturday',
      sunday: 'Sunday',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
    },
    daysShort: {
      saturday: 'Sat',
      sunday: 'Sun',
      monday: 'Mon',
      tuesday: 'Tue',
      wednesday: 'Wed',
      thursday: 'Thu',
    },
    lecture: 'Lecture',
    lectureNum: (n) => `Lecture ${n}`,
    addLecture: '+ Add Lecture',
    subjectPH: 'Subject Name',
    doctorPH: 'Doctor Name',
    roomPH: 'Room Number',
    timePH: 'Lecture Time',
    noLectures: 'No lectures',
    noLecture: 'No lecture',
    maxReached: 'Maximum 3 lectures per day',
    studentRequired: 'Please enter student name',
    saved: 'Saved successfully',
    imageSaved: 'Image saved',
    imageError: 'Error saving image',
    noSchedule: 'No schedule to export',
    groupPrefix: 'Group:',
    deptPrefix: 'Department:',
    tableHeader: ['Day', 'L.1', 'L.2', 'L.3'],
    watermark: 'By Amjad Shalfouh © 2026 - All Rights Reserved',
  }
};

// Active language
let currentLang = localStorage.getItem('lang') || 'ar';
function t(key) {
  const lang = TRANSLATIONS[currentLang];
  if (!lang) return key;
  if (typeof lang[key] === 'function') return lang[key];
  return lang[key] !== undefined ? lang[key] : key;
}
function tDays(dayKey) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].days[dayKey]) || dayKey;
}
function tDaysShort(dayKey) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].daysShort[dayKey]) || dayKey;
}
function tLectureNum(n) {
  return TRANSLATIONS[currentLang] ? TRANSLATIONS[currentLang].lectureNum(n) : `المحاضرة ${n}`;
}
