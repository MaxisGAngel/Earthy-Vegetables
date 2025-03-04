import { useParams } from 'react-router-dom';
import { Circle } from 'lucide-react';

const VegetableGuide = () => {
  const { vegetable } = useParams();
  const steps = 10;
  const currentStep = 3;

  return (
    <div className="min-h-screen">
      <div className="container">
        <h1 className="text-3xl font-bold mb-1">How to Grow {vegetable}</h1>
        <h2 className="text-xl mb-6">A Step-by-Step Guide</h2>

        <div className="info-box mb-8">
          <div className="space-y-4">
            <div>
              <div className="font-bold">Best Resources Depth:</div>
              <div>50 cm or 1'8"</div>
            </div>
            <div>
              <div className="font-bold">Time to Harvest:</div>
              <div>60-90 days</div>
            </div>
            <div>
              <div className="font-bold">Sunlight Requirements:</div>
              <div>Full sun, 6-8 hours daily</div>
            </div>
          </div>
        </div>

        <div className="progress-dots mb-12">
            {[...Array(steps)].map((_, i) => (
              <div
                key={i}
                className={`progress-dot ${
                  i < currentStep ? 'progress-dot-active' : 'progress-dot-inactive'
                }`}
              />
            ))}
        </div>

        <div className="space-y-10">
          <section>
            <h3 className="text-xl font-bold mb-4">Supplies Needed to Grow {vegetable}</h3>
            <ul className="task-list space-y-3">
              <li>Quality {vegetable.toLowerCase()} seeds or seedlings</li>
              <li>Well-draining potting soil or garden soil</li>
              <li>Organic compost or fertilizer</li>
              <li>Basic gardening tools (trowel, pruners)</li>
              <li>Watering can or irrigation system</li>
              <li>Plant markers or labels</li>
              <li>Garden gloves</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Setting Up Your {vegetable} Garden</h3>
            <ul className="task-list space-y-3">
              <li>Select a location that receives 6-8 hours of direct sunlight</li>
              <li>Test and amend soil pH to 6.0-7.0 for optimal growth</li>
              <li>Prepare raised beds or garden rows with proper spacing</li>
              <li>Add a layer of compost to enrich the soil</li>
              <li>Install support structures if needed</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Caring for Your {vegetable} Plants</h3>
            <div className="space-y-4">
              {[
                'Watering: Keep soil consistently moist but not waterlogged',
                'Fertilizing: Apply balanced fertilizer every 4-6 weeks',
                'Spacing: Maintain 18-24 inches between plants',
                'Pest Prevention: Monitor for common pests and diseases',
                'Harvesting: Pick when heads are firm and tight'
              ].map((task) => (
                <div key={task} className="task-item">
                  <Circle className="task-icon" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="note-box">
            <p>
              By following these steps, you can successfully grow {vegetable.toLowerCase()} in your garden.
              Remember to monitor your plants regularly and adjust care as needed based on your local climate
              and growing conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetableGuide;