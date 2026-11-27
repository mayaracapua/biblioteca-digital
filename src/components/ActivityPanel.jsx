
import { useEffect, useState } from "react";
import { subscribe } from "@/lib/eventBus";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ActivityPanel() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribe((event) => {
      setActivities((previous) =>
        [event, ...previous].slice(0, 5)
      );
    });

    return unsubscribe;
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividades recentes</CardTitle>
      </CardHeader>

      <CardContent>
        {activities.length === 0 ? (
          <p className="text-sm text-zinc-500">
            Nenhuma atividade registrada.
          </p>
        ) : (
          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li
                key={`${activity.message}-${index}`}
                className="border-b pb-2 text-sm"
              >
                {activity.message}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default ActivityPanel;
