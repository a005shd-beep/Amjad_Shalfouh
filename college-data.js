/* =========================================================================
   بيانات كلية تقنية المعلومات - الزاوية (Faculty of IT - Zawiya)
   تم استخراج البيانات من ملف: جدول_خريف_2026_2027.xlsx
   ========================================================================= */

window.COLLEGE_DATA = {
  collegeName: "كلية تقنية المعلومات - الزاوية",
  collegeNameEn: "Faculty of Information Technology - Zawiya",
  academicYear: "2026 - 2027",
  semester: "فصل الخريف",

  // الفترات الزمنية المعتمدة للمحاضرات
  timeSlots: [
    { slotIndex: 1, label: "المحاضرة الأولى (م.1)", defaultTime: "08:30 - 11:30" },
    { slotIndex: 2, label: "المحاضرة الثانية (م.2)", defaultTime: "11:30 - 02:30" },
    { slotIndex: 3, label: "المحاضرة الثالثة (م.3)", defaultTime: "02:30 - 05:30" }
  ],

  // الأقسام العلمية في الكلية
  departments: [
    { id: "all", name: "جميع الأقسام / المواد العامة" },
    { id: "general", name: "المرحلة العامة (إعداد)" },
    { id: "se", name: "قسم هندسة البرمجيات" },
    { id: "cs", name: "قسم علوم الحاسوب" },
    { id: "net", name: "قسم الشبكات والاتصالات" },
    { id: "is", name: "قسم نظم المعلومات" },
    { id: "ai", name: "قسم الذكاء الاصطناعي" }
  ],

  /* =========================================================================
     قائمة المواد الدراسية والمجموعات والمواعيد
     تم استخراجها من ملف الإكسل: جدول_خريف_2026_2027.xlsx (ورقة: الجدول المنظم)
     ========================================================================= */
  courses: [
    // ======= تصميم البرمجيات =======
    {
      id: "design_sw",
      code: "SE",
      name: "تصميم البرمجيات",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. رمزي النائلي", room: "1" }
      ]
    },
    // ======= يونكس عملي =======
    {
      id: "unix_practical",
      code: "CS",
      name: "يونكس عملي",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 2, time: "11:30 - 01:30", doctor: "أ. رمزي النائلي", room: "1" }
      ]
    },
    // ======= بنية الحاسوب =======
    {
      id: "comp_arch",
      code: "CS",
      name: "بنية الحاسوب",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م2", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. نسرين الصواني", room: "2" },
        { groupName: "م3", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. نسرين الصواني", room: "2" },
        { groupName: "م1", day: "sunday", slot: 1, time: "10:30 - 01:30", doctor: "أ. نسرين الصواني", room: "2" }
      ]
    },
    // ======= اختبار الجودة =======
    {
      id: "quality_test",
      code: "SE",
      name: "اختبار الجودة",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "د. إيمان رحال", room: "4" }
      ]
    },
    // ======= تحليل شيئي =======
    {
      id: "oop_analysis",
      code: "SE",
      name: "تحليل شيئي",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م2", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "د. إيمان رحال", room: "4" },
        { groupName: "م1", day: "sunday", slot: 1, time: "10:30 - 01:30", doctor: "د. إيمان رحال", room: "1" }
      ]
    },
    // ======= أساسيات نظم المعلومات =======
    {
      id: "is_basics",
      code: "IS",
      name: "أساسيات نظم المعلومات",
      departmentId: "is",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. أشرف برق", room: "5" },
        { groupName: "م2", day: "saturday", slot: 2, time: "11:30 - 12:30", doctor: "أ. أشرف برق", room: "5" },
        { groupName: "م3", day: "tuesday", slot: 2, time: "11:30 - 02:30", doctor: "أ. أشرف برق", room: "6" }
      ]
    },
    // ======= التجارة الإلكترونية =======
    {
      id: "ecommerce",
      code: "IS",
      name: "التجارة الإلكترونية",
      departmentId: "is",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. نور الهدى خماج", room: "6" }
      ]
    },
    // ======= التعامل بين الإنسان والحاسوب =======
    {
      id: "hci",
      code: "CS",
      name: "التعامل بين الإنسان والحاسوب",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. نور الهدى خماج", room: "6" }
      ]
    },
    // ======= هندسة البرمجيات =======
    {
      id: "sw_eng",
      code: "SE",
      name: "هندسة البرمجيات",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م2", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. أحمد الجريدي", room: "7" },
        { groupName: "م3", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. أحمد الجريدي", room: "7" },
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "أ. أحمد الجريدي", room: "6" }
      ]
    },
    // ======= هياكل بيانات 1 =======
    {
      id: "ds1",
      code: "CS",
      name: "هياكل بيانات 1",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م2", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "د. خليفة نصرات", room: "8" },
        { groupName: "م3", day: "saturday", slot: 2, time: "11:30 - 01:30", doctor: "د. خليفة نصرات", room: "8" },
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "د. خليفة نصرات", room: "5" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "د. خليفة نصرات", room: "5" },
        { groupName: "م1", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "د. خليفة نصرات", room: "5" },
        { groupName: "م3", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "د. خليفة نصرات", room: "5" }
      ]
    },
    // ======= برمجة النظم =======
    {
      id: "sys_prog",
      code: "CS",
      name: "برمجة النظم",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. فاطمة الطاهر", room: "9" }
      ]
    },
    // ======= مبادئ الإدارة =======
    {
      id: "mgmt_principles",
      code: "GS",
      name: "مبادئ الإدارة",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. عفاف الحاج", room: "10" }
      ]
    },
    // ======= مقدمة التجارة والأعمال =======
    {
      id: "intro_business",
      code: "GS",
      name: "مقدمة التجارة والأعمال",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. عفاف الحاج", room: "10" }
      ]
    },
    // ======= ويب 2 =======
    {
      id: "web2",
      code: "IT",
      name: "ويب 2",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "د. إيمان رحال", room: "1" },
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 10:30", doctor: "د. إيمان رحال", room: "8" }
      ]
    },
    // ======= ويب 1 =======
    {
      id: "web1",
      code: "IT",
      name: "ويب 1",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين الصواني", room: "2" },
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين الصواني", room: "7" }
      ]
    },
    // ======= نمذجة وتحليل البرمجيات =======
    {
      id: "sw_modeling",
      code: "SE",
      name: "نمذجة وتحليل البرمجيات",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "10:30 - 01:30", doctor: "أ. رمزي النائلي", room: "4" }
      ]
    },
    // ======= يونكس =======
    {
      id: "unix",
      code: "CS",
      name: "يونكس",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "أ. رمزي النائلي", room: "4" }
      ]
    },
    // ======= مقدمة نظم تشغيل =======
    {
      id: "intro_os",
      code: "CS",
      name: "مقدمة نظم تشغيل",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م2", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د. رويدا أبوزيد", room: "5" },
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "د. رويدا أبوزيد", room: "5" }
      ]
    },
    // ======= نظم تشغيل متقدمة =======
    {
      id: "adv_os",
      code: "CS",
      name: "نظم تشغيل متقدمة",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "أ. أحمد الجريدي", room: "6" }
      ]
    },
    // ======= تأمين 1 =======
    {
      id: "sec1",
      code: "NET",
      name: "تأمين 1",
      departmentId: "net",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د. أبوالقاسم انفيص", room: "7" }
      ]
    },
    // ======= هندسة المتطلبات =======
    {
      id: "req_eng",
      code: "SE",
      name: "هندسة المتطلبات",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "أ. فاضل الأسود", room: "7" }
      ]
    },
    // ======= أساسيات لغات البرمجة =======
    {
      id: "prog_lang_basics",
      code: "CS",
      name: "أساسيات لغات البرمجة",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د. محمد البشتي", room: "8" }
      ]
    },
    // ======= بايثون (اختياري) =======
    {
      id: "python_elective",
      code: "CS",
      name: "بايثون (اختياري)",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "د. محمد البشتي", room: "8" }
      ]
    },
    // ======= أساسيات تقنية المعلومات =======
    {
      id: "it_basics",
      code: "IT",
      name: "أساسيات تقنية المعلومات",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "د.", room: "9" }
      ]
    },
    // ======= تأمين 2 =======
    {
      id: "sec2",
      code: "NET",
      name: "تأمين 2",
      departmentId: "net",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د.", room: "9" }
      ]
    },
    // ======= برمجة 2 =======
    {
      id: "prog2",
      code: "CS",
      name: "برمجة 2",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م3", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين هوييسة", room: "معمل" },
        { groupName: "م4", day: "sunday", slot: 2, time: "10:30 - 12:30", doctor: "أ. نسرين هوييسة", room: "معمل" },
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين هوييسة", room: "1" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "أ. نسرين هوييسة", room: "1" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين هوييسة", room: "معمل" },
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. نسرين هوييسة", room: "معمل" },
        { groupName: "م4", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين هوييسة", room: "2" },
        { groupName: "م3", day: "thursday", slot: 2, time: "10:30 - 12:30", doctor: "أ. نسرين هوييسة", room: "2" }
      ]
    },
    // ======= البرمجة المرئية =======
    {
      id: "visual_prog",
      code: "CS",
      name: "البرمجة المرئية",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م3", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "أ. سالمة العجيلي", room: "10" },
        { groupName: "م4", day: "sunday", slot: 2, time: "10:30 - 12:30", doctor: "أ. سالمة العجيلي", room: "10" },
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "أ. سالمة العجيلي", room: "2" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "أ. سالمة العجيلي", room: "2" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. سالمة العجيلي", room: "2" },
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. سالمة العجيلي", room: "2" },
        { groupName: "م4", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "أ. سالمة العجيلي", room: "معمل" },
        { groupName: "م3", day: "thursday", slot: 2, time: "10:30 - 12:30", doctor: "أ. سالمة العجيلي", room: "معمل" }
      ]
    },
    // ======= برمجة 1 =======
    {
      id: "prog1",
      code: "CS",
      name: "برمجة 1",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "أ. رمضان الربيعي", room: "معمل" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "أ. رمضان الربيعي", room: "معمل" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. رمضان الربيعي", room: "1" },
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. رمضان الربيعي", room: "1" }
      ]
    },
    // ======= البرمجة الشيئية =======
    {
      id: "oop",
      code: "CS",
      name: "البرمجة الشيئية",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "أ. فاطمة الطاهر", room: "4" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "أ. فاطمة الطاهر", room: "4" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. فاطمة الطاهر", room: "4" },
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. فاطمة الطاهر", room: "4" }
      ]
    },
    // ======= هياكل بيانات 2 =======
    {
      id: "ds2",
      code: "CS",
      name: "هياكل بيانات 2",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "د. رمضان الفرد", room: "6" }
      ]
    },
    // ======= ويب 3 =======
    {
      id: "web3",
      code: "IT",
      name: "ويب 3",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "د. رمضان الفرد", room: "6" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 11:30", doctor: "د. رمضان الفرد", room: "6" }
      ]
    },
    // ======= قواعد متقدمة =======
    {
      id: "adv_db",
      code: "IS",
      name: "قواعد متقدمة",
      departmentId: "is",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ. عبدالسلام بكوري", room: "7" },
        { groupName: "م2", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "أ. عبدالسلام بكوري", room: "7" }
      ]
    },
    // ======= إدارة مشاريع التقنية =======
    {
      id: "it_pm",
      code: "IT",
      name: "إدارة مشاريع التقنية",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ. حسين موسى", room: "8" }
      ]
    },
    // ======= رياضة 3 =======
    {
      id: "math3",
      code: "GS",
      name: "رياضة 3",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م3", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "أ. سهيلة غزالة", room: "8" },
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ. سهيلة غزالة", room: "1" },
        { groupName: "م2", day: "wednesday", slot: 2, time: "11:30 - 02:30", doctor: "أ. سهيلة غزالة", room: "1" }
      ]
    },
    // ======= ريادة الأعمال =======
    {
      id: "entrepreneurship",
      code: "GS",
      name: "ريادة الاعمال",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ.", room: "قاعات مركز ريادة الاعمال" }
      ]
    },
    // ======= أخلاقيات المهنة =======
    {
      id: "ethics",
      code: "GS",
      name: "أخلاقيات المهنة",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ. عفاف الحاج", room: "9" },
        { groupName: "م2", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "أ. عفاف الحاج", room: "9" }
      ]
    },
    // ======= مقدمة شبكات =======
    {
      id: "intro_net",
      code: "NET",
      name: "مقدمة شبكات",
      departmentId: "net",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "tuesday", slot: 1, time: "08:30 - 11:30", doctor: "د. رويدا أبوزيد", room: "7" }
      ]
    },
    // ======= مصطلحات تقنية المعلومات =======
    {
      id: "it_terms",
      code: "GS",
      name: "مصطلحات تقنية المعلومات",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. دانيا صالح", room: "8" },
        { groupName: "م2", day: "tuesday", slot: 3, time: "12:30 - 02:30", doctor: "أ. دانيا صالح", room: "8" }
      ]
    },
    // ======= كتابة تقارير =======
    {
      id: "report_writing",
      code: "GS",
      name: "كتابة تقارير",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. دانيا صالح", room: "8" }
      ]
    },
    // ======= رياضة 2 =======
    {
      id: "math2",
      code: "GS",
      name: "رياضة 2",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ.", room: "2" }
      ]
    },
    // ======= مبادئ الإحصاء =======
    {
      id: "stats",
      code: "GS",
      name: "مبادئ الإحصاء",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ. حواء الواعر", room: "4" }
      ]
    },
    // ======= رياضة 1 =======
    {
      id: "math1",
      code: "GS",
      name: "رياضة 1",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "wednesday", slot: 2, time: "11:30 - 02:30", doctor: "أ.", room: "4" }
      ]
    },
    // ======= فيزياء 1 =======
    {
      id: "physics1",
      code: "GS",
      name: "فيزياء 1",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ. هاجر", room: "5" },
        { groupName: "م2", day: "wednesday", slot: 2, time: "11:30 - 02:30", doctor: "أ. هاجر", room: "5" }
      ]
    },
    // ======= ويب 4 =======
    {
      id: "web4",
      code: "IT",
      name: "ويب 4",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. أحمد الجريدي", room: "6" },
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "أ. أحمد الجريدي", room: "1" }
      ]
    },
    // ======= اقتصاد جزئي =======
    {
      id: "micro_econ",
      code: "GS",
      name: "اقتصاد جزئي",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "د. عبدالرزاق قزييمة", room: "9" }
      ]
    },
    // ======= تراكيب بيانات =======
    {
      id: "data_structures",
      code: "CS",
      name: "تراكيب بيانات",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 11:30", doctor: "أ. سهيلة غزالة", room: "4" },
        { groupName: "م2", day: "thursday", slot: 2, time: "11:30 - 02:30", doctor: "أ. سهيلة غزالة", room: "4" }
      ]
    },
    // ======= سمينار مشاريع =======
    {
      id: "seminar",
      code: "IT",
      name: "سمينار مشاريع",
      departmentId: "se",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "د. زائد العربي", room: "5" }
      ]
    },
    // ======= تكامل النظم =======
    {
      id: "sys_integration",
      code: "IS",
      name: "تكامل النظم",
      departmentId: "is",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 2, time: "10:30 - 01:30", doctor: "د. زائد العربي", room: "5" }
      ]
    },
    // ======= لغة إنجليزية 2 =======
    {
      id: "eng2",
      code: "GS",
      name: "لغة إنجليزية 2",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "أ. دانيا صالح", room: "6" },
        { groupName: "م1", day: "thursday", slot: 3, time: "12:30 - 02:30", doctor: "أ. دانيا صالح", room: "6" }
      ]
    },
    // ======= لغة إنجليزية 1 =======
    {
      id: "eng1",
      code: "GS",
      name: "لغة إنجليزية 1",
      departmentId: "general",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 2, time: "10:30 - 12:30", doctor: "أ. دانيا صالح", room: "6" }
      ]
    },
    // ======= وسائط متعددة =======
    {
      id: "multimedia",
      code: "IT",
      name: "وسائط متعددة",
      departmentId: "cs",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 11:30", doctor: "د. رويدا أبوزيد", room: "7" },
        { groupName: "م2", day: "thursday", slot: 2, time: "11:30 - 02:30", doctor: "د. رويدا أبوزيد", room: "7" }
      ]
    },
    // ======= مقدمة قواعد 1 =======
    {
      id: "intro_db1",
      code: "IS",
      name: "مقدمة قواعد 1",
      departmentId: "is",
      semesterLevel: 0,
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 11:30", doctor: "أ. رمضان الربيعي", room: "8" },
        { groupName: "م2", day: "thursday", slot: 2, time: "11:30 - 02:30", doctor: "أ. رمضان الربيعي", room: "8" }
      ]
    }
  ]
};

// دوال مساعدة للبحث والتصفية في بيانات الكلية
window.CollegeHelper = {
  // الحصول على كل المواد أو حسب القسم
  getCourses: function(deptId = "all") {
    if (!deptId || deptId === "all") return COLLEGE_DATA.courses;
    return COLLEGE_DATA.courses.filter(c => c.departmentId === deptId);
  },

  // الحصول على المحاضرات المتاحة في يوم ومحاضرة معينة
  getLecturesBySlot: function(dayKey, slotNumber, deptId = "all") {
    const results = [];
    const courses = this.getCourses(deptId);

    courses.forEach(course => {
      course.groups.forEach(group => {
        if (group.day === dayKey && Number(group.slot) === Number(slotNumber)) {
          results.push({
            courseId: course.id,
            courseCode: course.code,
            courseName: course.name,
            groupName: group.groupName,
            day: group.day,
            slot: group.slot,
            time: group.time,
            doctor: group.doctor,
            room: group.room
          });
        }
      });
    });

    return results;
  },

  // التحقق من تضارب المواعيد لمجموعة من المواد والمجموعات المختارة
  validateSelection: function(selectedCourseGroups) {
    // selectedCourseGroups: array of { courseId, groupName }
    const occupiedSlots = {}; // key: "day-slot" -> { courseName, groupName }
    const conflicts = [];
    const scheduleItems = [];

    selectedCourseGroups.forEach(item => {
      const course = COLLEGE_DATA.courses.find(c => c.id === item.courseId);
      if (!course) return;
      const group = course.groups.find(g => g.groupName === item.groupName);
      if (!group) return;

      const key = `${group.day}-${group.slot}`;
      if (occupiedSlots[key]) {
        conflicts.push({
          day: group.day,
          slot: group.slot,
          course1: occupiedSlots[key].courseName,
          group1: occupiedSlots[key].groupName,
          course2: course.name,
          group2: group.groupName
        });
      } else {
        occupiedSlots[key] = {
          courseName: course.name,
          groupName: group.groupName
        };
      }

      scheduleItems.push({
        courseName: course.name,
        courseCode: course.code,
        groupName: group.groupName,
        day: group.day,
        slot: group.slot,
        time: group.time,
        doctor: group.doctor,
        room: group.room
      });
    });

    return {
      isValid: conflicts.length === 0,
      conflicts: conflicts,
      items: scheduleItems
    };
  }
};
