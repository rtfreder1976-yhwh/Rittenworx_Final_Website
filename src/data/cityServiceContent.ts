// Hand-written local content for the four core cities' service pages
// (services/[slug].astro). Each service × city entry is unique so the pages
// can stand on their own as self-canonical URLs instead of duplicating the
// service hub pages.
//
// Keep entries factual: describe the housing, climate and typical problems of
// the area, not specific jobs, prices, reviews or customers.

export type CityKey = "madison-al" | "huntsville-al" | "athens-al" | "decatur-al";

export interface CityContent {
    /** Short paragraph describing the local housing stock / climate. */
    intro: string;
    /** Extra city-specific FAQ entries (answers must not quote prices). */
    faqs: { q: string; a: string }[];
    services: Record<string, { hook: string; body: string }>;
}

export const cityServiceContent: Record<CityKey, CityContent> = {
    "madison-al": {
        intro:
            "Madison grew fast. A lot of the housing here went up in subdivisions built from the 1990s through today, with builder-grade finishes that start showing their age around the 10 to 20 year mark. Add a humid North Alabama summer and spring storm season, and the same handful of problems keep coming up: settling cracks, tired paint, clogged gutters and worn trim.",
        faqs: [
            {
                q: "Where in Madison does Rittenworx work?",
                a: "Roy is based in Madison, so most of the city, including the neighborhoods off Hughes Road, Wall Triana Highway and County Line Road, is a short drive. Call or text (256) 221-0373 with your address and he will confirm.",
            },
            {
                q: "Do you work in newer Madison subdivisions?",
                a: "Yes. Newer homes tend to have builder-grade paint, thin trim and fast-cured drywall, and we repair those the same way we repair older homes: match the existing finish and leave the work clean.",
            },
        ],
        services: {
            "drywall-repair": {
                hook: "settling cracks, nail pops and water damage",
                body: "Many Madison homes are in the 10 to 25 year range, and that is when drywall starts showing seams, nail pops and hairline cracks above doors and windows as the house settles. We patch these, texture to match the surrounding wall and prime so the repair does not flash through the paint. Water stains from a roof or plumbing leak are a separate job: we find out the leak is fixed before we cut anything out.",
            },
            "interior-painting": {
                hook: "walls, ceilings and trim for Madison homes",
                body: "Madison's newer homes often have the same builder beige throughout and flat finishes that scuff easily. Repainting usually means patching the nail holes and dings left by years of living, caulking the trim gaps and cutting in clean lines. We protect floors and furniture, and we talk through sheen choices before we start, since a kitchen and a hallway wear paint very differently.",
            },
            "exterior-painting": {
                hook: "siding, trim and doors that hold up to Alabama weather",
                body: "Summer humidity, heavy spring rain and strong sun are hard on exterior paint in Madison. Trim and fascia boards on the south and west sides usually fail first. Good exterior work here is mostly prep: scraping loose paint, spot-priming bare wood, caulking joints and painting when the surface is dry. That is where most of a job's lasting power comes from, and it is where we spend the time.",
            },
            "gutter-cleaning": {
                hook: "clear gutters before storm season and leaf drop",
                body: "Madison lots with mature pines and oaks fill gutters with needles, leaves and shingle grit, and newer lots with young trees still collect pollen and roof debris. When gutters overflow, water runs down siding and pools near the foundation. We clear the troughs, flush the downspouts and check that water is actually leaving the system, not just moving the clog down the line.",
            },
            "gutter-installation": {
                hook: "seamless gutters and downspouts for Madison homes",
                body: "A common sight in Madison is a house whose original gutters are sagging, or whose downspouts empty right beside the slab. New gutters should be pitched toward the downspouts, hung securely on the fascia and sized for the roof area they serve. We also look at where the water goes once it leaves the downspout, because discharge next to the foundation causes more trouble than the gutter itself.",
            },
            "flooring-installation": {
                hook: "LVP, laminate and hardwood installation",
                body: "Luxury vinyl plank is a popular choice in Madison homes for kitchens, hallways and living areas because it stands up to kids, pets and humidity. The finished floor is only as good as the subfloor, so we check for flatness, moisture and loose spots before any plank goes down, then handle transitions, baseboard and quarter-round so the room looks finished.",
            },
            "garage-floor-coating": {
                hook: "epoxy and flake coatings for garage floors",
                body: "Garage slabs in Madison take a beating from hot tires, oil drips and winter salt tracked in on trucks. A coating only lasts if the concrete is prepared properly: grinding the surface, filling cracks and checking for moisture before epoxy is applied. We install flake epoxy systems that are easier to clean and hide stains, and we explain cure time so you know when the garage is usable again.",
            },
            "finish-carpentry": {
                hook: "trim, crown molding, baseboard and built-ins",
                body: "Builder-grade trim in many Madison houses is thin and finished with visible nail holes and open joints. Upgrading to taller baseboards, crown molding or a casing around a window changes how a room feels without a remodel. We measure, cope the joints where it matters, fill and caulk the nail holes and leave the trim ready to paint or already finished.",
            },
            "fence-installation": {
                hook: "wood fence installation and repair",
                body: "A fence in Madison sits in clay soil that holds water, which is why posts rot and lean long before the boards do. We set posts at the right depth for the fence height, space them consistently and install gates that are braced so they do not sag. If you have an existing fence, we repair leaning sections and replace rotted boards, not just panels that look worst.",
            },
            "deck-repair": {
                hook: "deck repair, staining and rebuilds",
                body: "Many decks in Madison were built in the first years of the subdivision and are now due for attention: soft boards near the ground, loose railings and a finish that has worn through. We probe the framing and ledger connection first, since that is what makes a deck safe, then replace damaged boards, tighten or rebuild railings and refinish the surface.",
            },
            "pressure-washing": {
                hook: "house, driveway and deck washing",
                body: "Humid Madison summers grow green algae and mildew on north-facing siding, shaded driveways and wood decks. We use the right pressure for the surface: soft washing for siding and roofs, higher pressure for concrete and walkways, and wood-safe settings for decks and fences. We pre-wet landscaping and rinse it afterward, and we point out spots, like failing caulk, that washing exposes.",
            },
        },
    },
    "huntsville-al": {
        intro:
            "Huntsville has the widest mix of homes in the area: mid-century ranches near Cummings Research Park, older neighborhoods like Old Town, Twickenham and Five Points, hillside houses around Monte Sano, and large newer subdivisions in the south of the city. Older houses bring plaster, old wiring in walls and trim that is not a standard size. Newer ones bring builder-grade finishes. Each needs a slightly different approach.",
        faqs: [
            {
                q: "Do you work in older Huntsville neighborhoods?",
                a: "Yes. Older homes have plaster, uneven walls and trim profiles that are no longer standard, so we match what is there where we can and tell you up front when something needs a different approach. Text a photo to (256) 221-0373 and Roy will tell you what he sees.",
            },
            {
                q: "Does Rittenworx serve Hampton Cove and Jones Valley?",
                a: "Yes. We serve Huntsville broadly, including Hampton Cove, Jones Valley, Research Park and the south side. Neighborhood pages are listed on our locations page.",
            },
        ],
        services: {
            "drywall-repair": {
                hook: "patches, cracks and water damage in Huntsville homes",
                body: "Huntsville homes range from plaster-and-lath in older neighborhoods to modern drywall in new subdivisions, and the repair is different for each. In older houses we deal with cracked plaster and repairs that need to blend into uneven walls. In newer houses it is usually settling cracks, nail pops and damage from moving furniture. We texture to match and prime before paint.",
            },
            "interior-painting": {
                hook: "interior painting in older and newer Huntsville homes",
                body: "Painting a Huntsville home often starts with the condition of what is under the paint. Older houses may have layers of previous coats, patched plaster and trim with heavy caulk lines, so more prep is needed to get a smooth finish. Newer homes need less surface work but benefit from better paint than the builder used. We scope the prep with you before the first coat goes on.",
            },
            "exterior-painting": {
                hook: "exterior painting for Huntsville's mix of homes",
                body: "Huntsville's exterior painting needs depend on the house: brick ranches with painted trim and soffits, older wood-sided homes that need more scraping and priming, and newer fiber cement or vinyl-trim houses where the focus is doors, shutters and trim. Hillside and tree-covered lots stay damp longer, so we watch for mildew and wood rot before painting over anything.",
            },
            "gutter-cleaning": {
                hook: "gutter cleaning for tree-covered Huntsville lots",
                body: "Many Huntsville neighborhoods, especially older ones and those near Monte Sano, have mature hardwoods that fill gutters every fall and again with spring pollen and seed pods. Packed gutters are heavy, rust fasteners and send water down the fascia. We clean the troughs, flush the downspouts and check the pitch, and we tell you if something needs repair rather than just cleaning.",
            },
            "gutter-installation": {
                hook: "seamless gutter installation in Huntsville",
                body: "Older Huntsville homes often have gutters that were patched many times or were never sized for the roof's runoff. On hillside lots the downspouts need to carry water away from foundations and toward the grade, not into a neighbor's yard. We install seamless gutters with enough downspouts for the roof area and review where the water ends up.",
            },
            "flooring-installation": {
                hook: "LVP, laminate and hardwood in Huntsville homes",
                body: "In Huntsville, flooring jobs often begin with what is under the old floor: slab, plywood over joists or old planks. Older homes may have floors that are no longer flat, and slab-on-grade houses need a moisture check before anything goes down. We prepare the subfloor, install LVP, laminate or hardwood and finish transitions and trim so the new floor meets the old rooms cleanly.",
            },
            "garage-floor-coating": {
                hook: "epoxy garage floors for Huntsville homes",
                body: "Garage slabs in Huntsville homes vary a lot in age and condition: hairline cracks, old oil stains and sealer left from a previous coating. Epoxy bonds well to a ground, clean slab and poorly to a sealed or dirty one, so preparation is the main job. We grind, repair cracks and apply a flake epoxy system that resists hot tires and cleans up with a mop.",
            },
            "finish-carpentry": {
                hook: "trim, molding and custom carpentry in Huntsville",
                body: "Huntsville's older homes often have trim profiles that are hard to find today, and replacing a damaged section means matching the shape or reworking a whole run. In newer homes we add baseboard, crown and wainscoting to rooms that came with plain trim. We scribe to uneven walls and floors so joints stay tight in houses that are not perfectly square.",
            },
            "fence-installation": {
                hook: "wood fencing and fence repair in Huntsville",
                body: "Huntsville yards range from flat subdivision lots to sloped hillside property, and a fence on a slope needs a different layout from a flat run: stepped or racked panels, and posts that are set to hold against the pull of the grade. We also repair existing fences, including leaning posts, broken rails and gates that no longer latch.",
            },
            "deck-repair": {
                hook: "deck repair, staining and railing fixes",
                body: "Decks in Huntsville see sun, rain and wide temperature swings, and decks on shaded or sloped lots stay wet longer. We inspect the ledger, joists and posts, replace soft boards, secure or rebuild railings and refinish the surface. If a deck is past repair we say so and explain what a rebuild involves.",
            },
            "pressure-washing": {
                hook: "pressure and soft washing for Huntsville homes",
                body: "Shaded Huntsville lots grow algae and mildew on siding, roofs, fences and walkways. Brick and vinyl are cleaned with different methods than wood, and an older house with failing paint or caulk needs a gentler approach than a recent build. We match pressure to the surface, protect plants and windows, and point out damage that washing uncovers.",
            },
        },
    },
    "athens-al": {
        intro:
            "Athens is the Limestone County seat, with a historic downtown square, older homes in the neighborhoods around it and newer subdivisions on the east side toward Huntsville and Madison. Many properties are larger than city lots, with detached shops, long fence lines and big yards. That makes fencing, exterior work and outdoor maintenance a bigger share of the jobs here.",
        faqs: [
            {
                q: "Does Rittenworx travel to Athens from Madison?",
                a: "Yes. Athens is part of our regular service area in Limestone County. Call or text (256) 221-0373 to arrange an estimate.",
            },
            {
                q: "Do you work on larger lots and rural properties around Athens?",
                a: "Yes. Fences, outbuilding repairs, decks and exterior painting are common on larger Athens properties. Text a few photos and your address and Roy will tell you how he would approach it.",
            },
        ],
        services: {
            "drywall-repair": {
                hook: "drywall patches and repairs in Athens homes",
                body: "Athens houses range from older homes near downtown to recent builds on the east side. Older houses can have plaster or drywall that has been patched before, and moisture from an old roof or window leak is a common cause of damage. We find the source, cut out what is damaged, patch, texture and prime so it blends into the room.",
            },
            "interior-painting": {
                hook: "interior painting for Athens homes",
                body: "Older Athens homes often have high ceilings, detailed trim and layers of old paint, which means careful prep and more time on trim and edges. Newer homes need quicker turnarounds with fewer repairs. Either way we patch, caulk and prime before painting, and we agree on colors and sheens with you before we start.",
            },
            "exterior-painting": {
                hook: "exterior painting for Athens houses and outbuildings",
                body: "Exterior painting in Athens includes older wood-sided homes that need scraping and priming, brick houses with painted trim and larger lots with porches, detached garages and workshops. Weather is hard on south-facing walls and horizontal surfaces such as porch rails and sills. We prep thoroughly and use exterior paint suited to those exposures.",
            },
            "gutter-cleaning": {
                hook: "gutter cleaning for Athens homes",
                body: "Athens' mature neighborhoods have large trees that drop a lot into gutters, and homes with metal or older shingle roofs send grit and debris into the troughs. We clean the gutters, flush the downspouts and check for loose hangers, sagging runs and standing water that points to a pitch problem.",
            },
            "gutter-installation": {
                hook: "seamless gutters for Athens homes",
                body: "Many Athens properties have long rooflines over porches, additions and detached garages, which is where gutters often go missing or fail. We install seamless gutters sized for the roof, with downspouts placed so water drains away from foundations and walkways, rather than pooling beside the building.",
            },
            "flooring-installation": {
                hook: "LVP, laminate and hardwood flooring in Athens",
                body: "Flooring work in Athens includes older homes with wood subfloors that may be uneven, and newer homes on slab. We check the subfloor and moisture, level where needed and install LVP, laminate or hardwood. Transitions, baseboards and door undercuts are part of the job so the finished floor sits right.",
            },
            "garage-floor-coating": {
                hook: "epoxy coatings for Athens garages and shops",
                body: "Athens homes often have larger garages and detached shops that see heavy use. Epoxy lasts when the slab is ground and cleaned first, so we prepare the surface, repair cracks and apply a flake epoxy system. It stands up to vehicles and equipment and is easier to clean than bare concrete.",
            },
            "finish-carpentry": {
                hook: "trim, molding and custom woodwork in Athens",
                body: "In Athens' older homes, finish carpentry usually means repairing or matching existing trim, repairing casings and installing built-ins that fit rooms that are not perfectly square. In newer homes it is adding trim detail to plain rooms. We measure carefully and scribe to walls and floors for tight joints.",
            },
            "fence-installation": {
                hook: "wood fence installation and repair in Athens",
                body: "Larger Athens lots mean longer fence runs, and the cost of a long fence is in the posts, so we pay attention to depth, spacing and bracing at corners and gates. Fences for pets, privacy or pasture edges are built differently, and we ask what the fence needs to do before we plan it. We also repair leaning or damaged existing fences.",
            },
            "deck-repair": {
                hook: "deck repair and refinishing in Athens",
                body: "Decks on Athens properties are often large and heavily used, with railings that loosen over time and boards that soften where water sits. We check the framing, ledger and posts, replace damaged boards, secure the railings and refinish the surface to protect it from the weather.",
            },
            "pressure-washing": {
                hook: "house, driveway and fence washing in Athens",
                body: "Larger Athens properties have a lot of surface to wash: siding, long driveways, porches, fences and outbuildings. Different surfaces need different pressure, so we soft wash siding and roofs, use stronger settings on concrete and keep wood at a safe pressure. We protect plants and windows and rinse everything off at the end.",
            },
        },
    },
    "decatur-al": {
        intro:
            "Decatur sits on the Tennessee River, with historic districts like Old Decatur and Albany that have homes from the early 1900s, alongside mid-century neighborhoods and newer subdivisions. River-area humidity and older construction mean moisture, wood rot and aging paint come up often. We also serve nearby Somerville and other Morgan County communities.",
        faqs: [
            {
                q: "Does Rittenworx serve Decatur and Somerville?",
                a: "Yes. Decatur and Somerville are both part of our regular service area. Call or text (256) 221-0373 to set up a free estimate.",
            },
            {
                q: "Do you work on older homes in Old Decatur and Albany?",
                a: "Yes. Older homes need more careful prep and often a different approach to plaster, trim and exterior wood. Text photos and Roy will tell you what he sees before he visits.",
            },
        ],
        services: {
            "drywall-repair": {
                hook: "drywall and plaster repair in Decatur homes",
                body: "Older Decatur homes often have a mix of plaster, drywall added during remodels and patches that have been painted over several times. Humidity and old leaks leave stains and soft spots. We find the cause of the damage, repair or replace what is compromised and texture and prime so the patch blends into the wall.",
            },
            "interior-painting": {
                hook: "interior painting for Decatur homes",
                body: "In Decatur's older neighborhoods, interior painting means careful prep: repairing cracked plaster, scraping failed paint on trim and caulking gaps so the finish looks clean. Mid-century and newer homes need less prep but benefit from better paint than the original. We go over colors and sheen with you before starting.",
            },
            "exterior-painting": {
                hook: "exterior painting for Decatur's humid river climate",
                body: "River humidity keeps wood damp longer in Decatur, so exterior paint on trim, porches and siding fails sooner than it would in a drier place. We scrape and sand loose paint, replace rotted boards before painting and prime bare wood so the new coat bonds. Older wood-sided homes in the historic districts are a regular part of this work.",
            },
            "gutter-cleaning": {
                hook: "gutter cleaning for Decatur homes",
                body: "Older Decatur neighborhoods have mature trees that fill gutters, and clogged gutters on older homes send water down fascia boards and into wall cavities. We clean the troughs, flush the downspouts, check for rot on the fascia behind the gutter and tell you if something needs repair.",
            },
            "gutter-installation": {
                hook: "seamless gutter installation in Decatur",
                body: "Older homes in Decatur often have gutters that were added or patched over time, with downspouts that do not move water far enough from the foundation. We install seamless gutters, sized for the roof, with downspouts placed to carry water away. We also check the fascia boards behind the old gutters and flag rot before the new ones go up.",
            },
            "flooring-installation": {
                hook: "LVP, laminate and hardwood flooring in Decatur",
                body: "Flooring jobs in Decatur's older homes frequently involve uneven wood subfloors and crawlspaces where moisture is a concern. We check the subfloor and moisture conditions before installing LVP, laminate or hardwood, level where needed and finish transitions and trim. Humid conditions make moisture checks a real part of the job here.",
            },
            "garage-floor-coating": {
                hook: "epoxy and flake garage floor coatings in Decatur",
                body: "Garage floors in Decatur homes face humidity, oil and tire marks. Epoxy needs a clean, ground, dry slab to bond, so we prepare the surface, repair cracks and apply a flake epoxy system that resists stains and cleans easily. We explain cure time so you know when you can park again.",
            },
            "finish-carpentry": {
                hook: "trim, molding and carpentry for Decatur homes",
                body: "Older Decatur homes have trim profiles and casings that are hard to match, and repairs often require reproducing the original shape. In newer homes we add baseboard, crown and casing to rooms with plain trim. We scribe to walls and floors that are out of square for tight joints.",
            },
            "fence-installation": {
                hook: "wood fence installation and repair in Decatur",
                body: "Fences in Decatur sit in soil that stays damp, which hastens post rot, so post depth and a good setting matter. We build privacy and picket fences, set braced gates and repair leaning or rotted sections of existing fences. Property lines in older neighborhoods can be unclear, so we recommend confirming yours before installation.",
            },
            "deck-repair": {
                hook: "deck repair and refinishing in Decatur",
                body: "Humidity keeps decks damp in Decatur, so soft boards, rotted rail posts and failing finish are common. We check the framing and ledger connection, replace damaged boards, secure the railings and refinish the surface. If rot has gone too far to repair, we tell you what a rebuild would involve.",
            },
            "pressure-washing": {
                hook: "house, deck and driveway washing in Decatur",
                body: "Decatur's humidity grows algae and mildew on siding, roofs, decks and walkways. We use soft washing on siding and roofs, higher pressure on concrete and wood-safe settings on decks and fences. Older homes with failing caulk or paint get a gentler approach, and we point out any damage washing reveals.",
            },
        },
    },
};
