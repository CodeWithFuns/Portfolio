import React from "react";
import { Trophy } from "lucide-react";

const awards = [
  {
    title: "UIHP IC6 Funded Project",
    organization: "University Innovation Hub Program (UIHP)",
    year: "2025",
    description:
      "Our project “Prohori AI – Rumor Fact-Checking System” was selected for funding under UIHP IC6 and received a grant of 30,000 ৳ for its innovative approach to combating misinformation."
  },
  {
    title: "Hackathon Finalist – Build4Democracy",
    organization:
      "Build4Democracy Hackathon (SecDev & Global Affairs Canada × UNDP Bangladesh)",
    year: "2025",
    description:
      "Prohori AI was selected as a finalist in the Build4Democracy Hackathon, an innovation challenge focused on strengthening information integrity, democracy, and safe digital spaces."
  },
  {
    title: "3rd Place – Spark Tank Project Showcasing Competition",
    organization: "Cluster Club, Khulna University",
    year: "2024",
    description:
      "Secured 3rd position for the Software Engineering project “AI Movie Recommender,” featuring AI-powered recommendations, chatbot assistance, movie insights, and trailer integration."
  }
];

function AwardsAchievements() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 text-left">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8 border-b-2 border-blue-200 pb-2">
          Awards & Achievements
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="
                p-6 rounded-2xl bg-blue-50 dark:bg-gray-800
                shadow-md border-l-4 border-blue-500
                transition-all duration-300 ease-out
                hover:shadow-xl hover:-translate-y-1 hover:bg-blue-100
                dark:hover:bg-gray-700
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="text-yellow-500 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
                  {award.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {award.organization} • {award.year}
              </p>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsAchievements;
