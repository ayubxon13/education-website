export default function CourseAuthor() {
  return (
    <div className="sm:flex grid gap-[14px] items-center justify-between">
      <div className="flex gap-[10px] items-center">
        <p className="lg:py-[10px] py-2 lg:text-lg text-sm lg:px-4 px-[14px] rounded-lg border border-[#F1F1F3]">
          4 Weeks
        </p>
        <p className="lg:py-[10px] py-2 lg:text-lg text-sm lg:px-4 px-[14px] rounded-lg border border-[#F1F1F3]">
          Beginner
        </p>
      </div>
      <p className="font-medium lg:text-xl sm:text-lg text-sm text-[#262626]">
        By John Smith
      </p>
    </div>
  );
}
