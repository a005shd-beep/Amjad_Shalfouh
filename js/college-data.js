/* =========================================================================
   بيانات كلية تقنية المعلومات - الزاوية (Faculty of IT - Zawiya)
   تم استخراج وتنظيم البيانات من ملف الإكسل: جدول_خريف_2026_2027.xlsx
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

  // الأقسام والتخصصات العلمية (للاختيار والعرض أسفل اسم الطالب)
  departments: [
    "هندسة البرمجيات",
    "تقنية الحاسوب",
    "نظم المعلومات التطبيقية"
  ],

  /* =========================================================================
     قائمة المواد الدراسية والمجموعات والمواعيد
     ========================================================================= */
  courses: [
    // 1. تصميم البرمجيات
    {
      id: "design_sw",
      code: "SE",
      name: "تصميم البرمجيات",
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. رمزي النائلي", room: "1" }
      ]
    },
    // 2. يونكس عملي
    {
      id: "unix_practical",
      code: "CS",
      name: "يونكس عملي",
      groups: [
        { groupName: "م1", day: "saturday", slot: 2, time: "11:30 - 01:30", doctor: "أ. رمزي النائلي", room: "1" }
      ]
    },
    // 3. بنية الحاسوب
    {
      id: "comp_arch",
      code: "CS",
      name: "بنية الحاسوب",
      groups: [
        { groupName: "م2", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. نسرين الصواني", room: "2" },
        { groupName: "م3", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. نسرين الصواني", room: "2" },
        { groupName: "م1", day: "sunday", slot: 1, time: "10:30 - 01:30", doctor: "أ. نسرين الصواني", room: "2" }
      ]
    },
    // 4. اختبار الجودة
    {
      id: "quality_test",
      code: "SE",
      name: "اختبار الجودة",
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "د. إيمان رحال", room: "4" }
      ]
    },
    // 5. تحليل شيئي
    {
      id: "oop_analysis",
      code: "SE",
      name: "تحليل شيئي",
      groups: [
        { groupName: "م2", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "د. إيمان رحال", room: "4" },
        { groupName: "م1", day: "sunday", slot: 1, time: "10:30 - 01:30", doctor: "د. إيمان رحال", room: "1" }
      ]
    },
    // 6. أساسيات نظم المعلومات
    {
      id: "is_basics",
      code: "IS",
      name: "أساسيات نظم المعلومات",
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. أشرف برق", room: "5" },
        { groupName: "م2", day: "saturday", slot: 2, time: "11:30 - 12:30", doctor: "أ. أشرف برق", room: "5" },
        { groupName: "م3", day: "tuesday", slot: 2, time: "11:30 - 02:30", doctor: "أ. أشرف برق", room: "6" }
      ]
    },
    // 7. التجارة الإلكترونية
    {
      id: "ecommerce",
      code: "IS",
      name: "التجارة الإلكترونية",
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. نور الهدى خماج", room: "6" }
      ]
    },
    // 8. التعامل بين الإنسان والحاسوب
    {
      id: "hci",
      code: "CS",
      name: "التعامل بين الإنسان والحاسوب",
      groups: [
        { groupName: "م1", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. نور الهدى خماج", room: "6" }
      ]
    },
    // 9. هندسة البرمجيات
    {
      id: "sw_eng",
      code: "SE",
      name: "هندسة البرمجيات",
      groups: [
        { groupName: "م2", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. أحمد الجريدي", room: "7" },
        { groupName: "م3", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. أحمد الجريدي", room: "7" },
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "أ. أحمد الجريدي", room: "6" }
      ]
    },
    // 10. هياكل بيانات 1
    {
      id: "ds1",
      code: "CS",
      name: "هياكل بيانات 1",
      groups: [
        { groupName: "م2", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "د. خليفة نصرات", room: "8" },
        { groupName: "م3", day: "saturday", slot: 2, time: "11:30 - 01:30", doctor: "د. خليفة نصرات", room: "8" },
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "د. خليفة نصرات", room: "5" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "د. خليفة نصرات", room: "5" },
        { groupName: "م1", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "د. خليفة نصرات", room: "5" },
        { groupName: "م3", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "د. خليفة نصرات", room: "5" }
      ]
    },
    // 11. برمجة النظم
    {
      id: "sys_prog",
      code: "CS",
      name: "برمجة النظم",
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. فاطمة الطاهر", room: "9" }
      ]
    },
    // 12. مبادئ الإدارة
    {
      id: "mgmt_principles",
      code: "GS",
      name: "مبادئ الإدارة",
      groups: [
        { groupName: "م1", day: "saturday", slot: 1, time: "08:30 - 11:30", doctor: "أ. عفاف الحاج", room: "10" }
      ]
    },
    // 13. مقدمة التجارة والأعمال
    {
      id: "intro_business",
      code: "GS",
      name: "مقدمة التجارة والأعمال",
      groups: [
        { groupName: "م1", day: "saturday", slot: 2, time: "11:30 - 02:30", doctor: "أ. عفاف الحاج", room: "10" }
      ]
    },
    // 14. ويب 2
    {
      id: "web2",
      code: "IT",
      name: "ويب 2",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "د. إيمان رحال", room: "1" },
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 10:30", doctor: "د. إيمان رحال", room: "8" }
      ]
    },
    // 15. ويب 1
    {
      id: "web1",
      code: "IT",
      name: "ويب 1",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين الصواني", room: "2" },
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. نسرين الصواني", room: "7" }
      ]
    },
    // 16. نمذجة وتحليل البرمجيات
    {
      id: "sw_modeling",
      code: "SE",
      name: "نمذجة وتحليل البرمجيات",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "10:30 - 01:30", doctor: "أ. رمزي النائلي", room: "4" }
      ]
    },
    // 17. يونكس
    {
      id: "unix",
      code: "CS",
      name: "يونكس",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 10:30", doctor: "أ. رمزي النائلي", room: "4" }
      ]
    },
    // 18. مقدمة نظم تشغيل
    {
      id: "intro_os",
      code: "CS",
      name: "مقدمة نظم تشغيل",
      groups: [
        { groupName: "م2", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د. رويدا أبوزيد", room: "5" },
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "د. رويدا أبوزيد", room: "5" }
      ]
    },
    // 19. نظم تشغيل متقدمة
    {
      id: "adv_os",
      code: "CS",
      name: "نظم تشغيل متقدمة",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "أ. أحمد الجريدي", room: "6" }
      ]
    },
    // 20. تأمين 1
    {
      id: "sec1",
      code: "NET",
      name: "تأمين 1",
      groups: [
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د. أبوالقاسم انفيص", room: "7" }
      ]
    },
    // 21. هندسة المتطلبات
    {
      id: "req_eng",
      code: "SE",
      name: "هندسة المتطلبات",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "أ. فاضل الأسود", room: "7" }
      ]
    },
    // 22. أساسيات لغات البرمجة
    {
      id: "prog_lang_basics",
      code: "CS",
      name: "أساسيات لغات البرمجة",
      groups: [
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د. محمد البشتي", room: "8" }
      ]
    },
    // 23. بايثون (اختياري)
    {
      id: "python_elective",
      code: "CS",
      name: "بايثون (اختياري)",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "د. محمد البشتي", room: "8" }
      ]
    },
    // 24. أساسيات تقنية المعلومات
    {
      id: "it_basics",
      code: "IT",
      name: "أساسيات تقنية المعلومات",
      groups: [
        { groupName: "م1", day: "sunday", slot: 1, time: "08:30 - 11:30", doctor: "د.", room: "9" }
      ]
    },
    // 25. تأمين 2
    {
      id: "sec2",
      code: "NET",
      name: "تأمين 2",
      groups: [
        { groupName: "م1", day: "sunday", slot: 2, time: "11:30 - 02:30", doctor: "د.", room: "9" }
      ]
    },
    // 26. برمجة 2
    {
      id: "prog2",
      code: "CS",
      name: "برمجة 2",
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
    // 27. البرمجة المرئية
    {
      id: "visual_prog",
      code: "CS",
      name: "البرمجة المرئية",
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
    // 28. برمجة 1
    {
      id: "prog1",
      code: "CS",
      name: "برمجة 1",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "أ. رمضان الربيعي", room: "معمل" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "أ. رمضان الربيعي", room: "معمل" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. رمضان الربيعي", room: "1" },
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. رمضان الربيعي", room: "1" }
      ]
    },
    // 29. البرمجة الشيئية
    {
      id: "oop",
      code: "CS",
      name: "البرمجة الشيئية",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 10:30", doctor: "أ. فاطمة الطاهر", room: "4" },
        { groupName: "م2", day: "monday", slot: 2, time: "10:30 - 12:30", doctor: "أ. فاطمة الطاهر", room: "4" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. فاطمة الطاهر", room: "4" },
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. فاطمة الطاهر", room: "4" }
      ]
    },
    // 30. هياكل بيانات 2
    {
      id: "ds2",
      code: "CS",
      name: "هياكل بيانات 2",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "د. رمضان الفرد", room: "6" }
      ]
    },
    // 31. ويب 3
    {
      id: "web3",
      code: "IT",
      name: "ويب 3",
      groups: [
        { groupName: "م1", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "د. رمضان الفرد", room: "6" },
        { groupName: "م2", day: "tuesday", slot: 1, time: "08:30 - 11:30", doctor: "د. رمضان الفرد", room: "6" }
      ]
    },
    // 32. قواعد متقدمة
    {
      id: "adv_db",
      code: "IS",
      name: "قواعد متقدمة",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ. عبدالسلام بكوري", room: "7" },
        { groupName: "م2", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "أ. عبدالسلام بكوري", room: "7" }
      ]
    },
    // 33. إدارة مشاريع التقنية
    {
      id: "it_pm",
      code: "IT",
      name: "إدارة مشاريع التقنية",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ. حسين موسى", room: "8" }
      ]
    },
    // 34. رياضة 3
    {
      id: "math3",
      code: "GS",
      name: "رياضة 3",
      groups: [
        { groupName: "م3", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "أ. سهيلة غزالة", room: "8" },
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ. سهيلة غزالة", room: "1" },
        { groupName: "م2", day: "wednesday", slot: 2, time: "11:30 - 02:30", doctor: "أ. سهيلة غزالة", room: "1" }
      ]
    },
    // 35. ريادة الأعمال
    {
      id: "entrepreneurship",
      code: "GS",
      name: "ريادة الاعمال",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ.", room: "قاعات مركز ريادة الاعمال" }
      ]
    },
    // 36. أخلاقيات المهنة
    {
      id: "ethics",
      code: "GS",
      name: "أخلاقيات المهنة",
      groups: [
        { groupName: "م1", day: "monday", slot: 1, time: "08:30 - 11:30", doctor: "أ. عفاف الحاج", room: "9" },
        { groupName: "م2", day: "monday", slot: 2, time: "11:30 - 02:30", doctor: "أ. عفاف الحاج", room: "9" }
      ]
    },
    // 37. مقدمة شبكات
    {
      id: "intro_net",
      code: "NET",
      name: "مقدمة شبكات",
      groups: [
        { groupName: "م1", day: "tuesday", slot: 1, time: "08:30 - 11:30", doctor: "د. رويدا أبوزيد", room: "7" }
      ]
    },
    // 38. مصطلحات تقنية المعلومات
    {
      id: "it_terms",
      code: "GS",
      name: "مصطلحات تقنية المعلومات",
      groups: [
        { groupName: "م1", day: "tuesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. دانيا صالح", room: "8" },
        { groupName: "م2", day: "tuesday", slot: 3, time: "12:30 - 02:30", doctor: "أ. دانيا صالح", room: "8" }
      ]
    },
    // 39. كتابة تقارير
    {
      id: "report_writing",
      code: "GS",
      name: "كتابة تقارير",
      groups: [
        { groupName: "م1", day: "tuesday", slot: 2, time: "10:30 - 12:30", doctor: "أ. دانيا صالح", room: "8" }
      ]
    },
    // 40. رياضة 2
    {
      id: "math2",
      code: "GS",
      name: "رياضة 2",
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ.", room: "2" }
      ]
    },
    // 41. مبادئ الإحصاء
    {
      id: "stats",
      code: "GS",
      name: "مبادئ الإحصاء",
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ. حواء الواعر", room: "4" }
      ]
    },
    // 42. رياضة 1
    {
      id: "math1",
      code: "GS",
      name: "رياضة 1",
      groups: [
        { groupName: "م1", day: "wednesday", slot: 2, time: "11:30 - 02:30", doctor: "أ.", room: "4" }
      ]
    },
    // 43. فيزياء 1
    {
      id: "physics1",
      code: "GS",
      name: "فيزياء 1",
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "أ. هاجر", room: "5" },
        { groupName: "م2", day: "wednesday", slot: 2, time: "11:30 - 02:30", doctor: "أ. هاجر", room: "5" }
      ]
    },
    // 44. ويب 4
    {
      id: "web4",
      code: "IT",
      name: "ويب 4",
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 10:30", doctor: "أ. أحمد الجريدي", room: "6" },
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "أ. أحمد الجريدي", room: "1" }
      ]
    },
    // 45. اقتصاد جزئي
    {
      id: "micro_econ",
      code: "GS",
      name: "اقتصاد جزئي",
      groups: [
        { groupName: "م1", day: "wednesday", slot: 1, time: "08:30 - 11:30", doctor: "د. عبدالرزاق قزييمة", room: "9" }
      ]
    },
    // 46. تراكيب بيانات
    {
      id: "data_structures",
      code: "CS",
      name: "تراكيب بيانات",
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 11:30", doctor: "أ. سهيلة غزالة", room: "4" },
        { groupName: "م2", day: "thursday", slot: 2, time: "11:30 - 02:30", doctor: "أ. سهيلة غزالة", room: "4" }
      ]
    },
    // 47. سمينار مشاريع
    {
      id: "seminar",
      code: "IT",
      name: "سمينار مشاريع",
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "د. زائد العربي", room: "5" }
      ]
    },
    // 48. تكامل النظم
    {
      id: "sys_integration",
      code: "IS",
      name: "تكامل النظم",
      groups: [
        { groupName: "م1", day: "thursday", slot: 2, time: "10:30 - 01:30", doctor: "د. زائد العربي", room: "5" }
      ]
    },
    // 49. لغة إنجليزية 2
    {
      id: "eng2",
      code: "GS",
      name: "لغة إنجليزية 2",
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 10:30", doctor: "أ. دانيا صالح", room: "6" },
        { groupName: "م1", day: "thursday", slot: 3, time: "12:30 - 02:30", doctor: "أ. دانيا صالح", room: "6" }
      ]
    },
    // 50. لغة إنجليزية 1
    {
      id: "eng1",
      code: "GS",
      name: "لغة إنجليزية 1",
      groups: [
        { groupName: "م1", day: "thursday", slot: 2, time: "10:30 - 12:30", doctor: "أ. دانيا صالح", room: "6" }
      ]
    },
    // 51. وسائط متعددة
    {
      id: "multimedia",
      code: "IT",
      name: "وسائط متعددة",
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 11:30", doctor: "د. رويدا أبوزيد", room: "7" },
        { groupName: "م2", day: "thursday", slot: 2, time: "11:30 - 02:30", doctor: "د. رويدا أبوزيد", room: "7" }
      ]
    },
    // 52. مقدمة قواعد 1
    {
      id: "intro_db1",
      code: "IS",
      name: "مقدمة قواعد 1",
      groups: [
        { groupName: "م1", day: "thursday", slot: 1, time: "08:30 - 11:30", doctor: "أ. رمضان الربيعي", room: "8" },
        { groupName: "م2", day: "thursday", slot: 2, time: "11:30 - 02:30", doctor: "أ. رمضان الربيعي", room: "8" }
      ]
    }
  ]
};

// دوال مساعدة في بيانات الكلية
window.CollegeHelper = {
  // الحصول على كل المواد
  getCourses: function() {
    return COLLEGE_DATA.courses;
  },

  // الحصول على المحاضرات المتاحة في يوم ومحاضرة معينة
  getLecturesBySlot: function(dayKey, slotNumber) {
    const results = [];
    const courses = this.getCourses();

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
    const occupiedSlots = {};
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
