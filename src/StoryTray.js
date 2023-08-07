import { useEffect } from "react";

export default function StoryTray({ stories }) {
  useEffect(() => {
    stories.push({
      id: "create",
      label: "creat-Story"
    });
    return () => {
      stories.pop();
    };
  }, [stories]);

  return (
    <ul>
      {stories.map((story, index) => (
        <li key={story.id + "-" + index}>{story.label}</li>
      ))}
    </ul>
  );
}
