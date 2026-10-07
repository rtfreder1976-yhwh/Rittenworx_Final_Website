// Service-specific local copy for the four core cities on services/[slug].astro.
// The intro and both FAQs are written per service so they are not the same
// paragraph repeated eleven times. Canonicals still point at the service hubs
// (see [slug].astro): this copy is for the reader, and the hub stays the
// preferred URL.
//
// Factual only. No invented customers, reviews, prices, stats, road names,
// credentials, or services Roy has not already described.

export type CityKey = "madison-al" | "huntsville-al" | "athens-al" | "decatur-al";

export interface ServiceLocal {
    /** Problem, what Roy does, and a call to action. Must stay under 155 characters. */
    meta: string;
    /** Ties this city's housing or climate to this service. */
    intro: string;
    body: string;
    faqs: { q: string; a: string }[];
}

export interface CityContent {
    services: Record<string, ServiceLocal>;
}

export const cityServiceContent: Record<CityKey, CityContent> = {
    "madison-al": {
        services: {
            "drywall-repair": {
                meta: "Cracks over the doors in a Madison house? Roy patches the drywall, matches the texture, and primes. Call (256) 221-0373.",
                intro: "Madison subdivisions from the 1990s on used fast-cured drywall and builder paint. After a decade or two the seams, nail pops, and cracks over doors show up, once summer humidity and the house's settling meet.",
                body: "Many Madison homes are in the 10 to 25 year range, and that is when drywall starts showing seams, nail pops and hairline cracks above doors and windows as the house settles. Roy patches these, textures to match the surrounding wall, and primes so the repair does not flash through the paint. Water stains from a roof or plumbing leak are a separate job: he finds out the leak is fixed before he cuts anything out.",
                faqs: [
                    {
                        q: "Why do cracks show up over doors in Madison houses?",
                        a: "Those houses settle, and the drywall joint above a door or window is where the crack opens. Roy patches it, matches the texture already on the wall, and primes so the paint does not flash.",
                    },
                    {
                        q: "What if a Madison ceiling stain came from a leak?",
                        a: "Roy does not cover an active leak. Once the roof or plumbing leak is fixed, he cuts out the soft drywall, patches, textures, and primes.",
                    },
                ],
            },
            "interior-painting": {
                meta: "Builder beige scuffing off a Madison hallway? Roy fills the dings, caulks the trim, and paints. Call (256) 221-0373.",
                intro: "A lot of Madison interiors are still the builder beige, in a flat sheen that scuffs in hallways and kids' rooms. The color is the easy part. The nail holes, open trim joints, and scuffed corners are the work.",
                body: "Madison's newer homes often have the same builder beige throughout and flat finishes that scuff easily. Repainting means patching the nail holes and dings left by years of living, caulking the trim gaps, and cutting in clean lines. Roy protects floors and furniture, and he talks through sheen choices before he starts, since a kitchen and a hallway wear paint very differently.",
                faqs: [
                    {
                        q: "Will new paint hide the scuffs in a Madison hallway?",
                        a: "Not if the dings stay. Roy fills the nail holes, caulks the trim gaps, and cuts in clean lines before the color goes on. A hallway and a bedroom do not wear paint the same way, so he sets the sheen for the room.",
                    },
                    {
                        q: "Does a Madison kitchen need different paint than the bedrooms?",
                        a: "Yes. Kitchens get grease and washing. Roy uses a sheen that can be wiped, and he covers the counters and floor before he starts.",
                    },
                ],
            },
            "exterior-painting": {
                meta: "Peeling trim on the sunny side of a Madison house? Roy scrapes, primes the bare wood, and paints it dry. Call (256) 221-0373.",
                intro: "Madison's south and west trim takes the afternoon sun, then a humid night. That cycle lifts paint on fascia and window trim before the rest of the house looks tired.",
                body: "Summer humidity, heavy spring rain, and strong sun are hard on exterior paint in Madison. Trim and fascia boards on the south and west sides fail first. Good exterior work here is mostly prep: scraping loose paint, spot-priming bare wood, caulking joints, and painting when the surface is dry. That is where most of a job's lasting power comes from, and it is where Roy spends the time.",
                faqs: [
                    {
                        q: "Why does trim on the west side of a Madison house peel first?",
                        a: "Sun and humidity hit that side hardest. Roy scrapes what is loose, spot-primes bare wood, caulks the joints, and paints when the surface is dry.",
                    },
                    {
                        q: "Can Roy paint a Madison house right after a spring storm?",
                        a: "He paints when the wood is dry. Wet fascia and siding will not hold paint, so he waits for a dry surface rather than coating damp wood.",
                    },
                ],
            },
            "gutter-cleaning": {
                meta: "Pine needles overflowing a Madison gutter? Roy clears the trough and flushes the downspout. Call (256) 221-0373.",
                intro: "Madison lots with pines and oaks drop needles, leaves, and shingle grit into the gutters. Newer streets with young trees still pack the troughs with pollen. Either way, the overflow runs down the siding and sits by the slab.",
                body: "Madison lots with mature pines and oaks fill gutters with needles, leaves, and shingle grit, and newer lots with young trees still collect pollen and roof debris. When gutters overflow, water runs down siding and pools near the foundation. Roy clears the troughs, flushes the downspouts, and checks that water is actually leaving the system, not just moving the clog down the line.",
                faqs: [
                    {
                        q: "How do pine needles clog a Madison gutter differently from leaves?",
                        a: "Needles mat into a layer that holds water even when the gutter looks only partly full. Roy clears the trough and flushes the downspout so the clog is not just pushed to the next elbow.",
                    },
                    {
                        q: "What happens when a Madison gutter overflows onto the siding?",
                        a: "Water streaks the siding and pools at the foundation. Roy clears the system and checks that water leaves the downspout, rather than stopping at the next clog.",
                    },
                ],
            },
            "gutter-installation": {
                meta: "Madison downspouts dumping water on the slab? Roy pitches the gutters so the water leaves the house. Call (256) 221-0373.",
                intro: "A lot of original Madison gutters now sag, or the downspout dumps water against the slab. The gutter is only doing its job if the water gets away from the house.",
                body: "A common sight in Madison is a house whose original gutters are sagging, or whose downspouts empty right beside the slab. Seamless gutters should be pitched toward the downspouts, hung securely on the fascia, and sized for the roof area they serve. Roy also looks at where the water goes once it leaves the downspout, because discharge next to the foundation causes more trouble than the gutter itself.",
                faqs: [
                    {
                        q: "Why do Madison downspouts cause trouble when the gutter looks fine?",
                        a: "The water has to leave the slab. Roy looks at pitch, hanger spacing, and where the downspout discharges. A pool of water next to the foundation does more harm than a dirty trough.",
                    },
                    {
                        q: "What does Roy check on the fascia before new gutters go up in Madison?",
                        a: "He looks for soft fascia behind the old gutter. Hanging new gutters on rotten wood just moves the problem. He flags that wood before the new run goes up.",
                    },
                ],
            },
            "flooring-installation": {
                meta: "New floors clicking in a Madison house? Roy fixes the subfloor before the plank goes down. Call (256) 221-0373.",
                intro: "Madison families put luxury vinyl in kitchens and halls because kids, pets, and humid summers are hard on carpet. The plank looks simple. The subfloor under it decides whether it stays flat.",
                body: "Luxury vinyl plank is a common choice in Madison homes for kitchens, hallways, and living areas because it stands up to kids, pets, and humidity. The finished floor is only as good as the subfloor, so Roy checks for flatness, moisture, and loose spots before any plank goes down, then handles transitions, baseboard, and quarter-round so the room looks finished.",
                faqs: [
                    {
                        q: "Why does new flooring in a Madison house bounce or click?",
                        a: "The subfloor is loose, out of flat, or damp. Roy checks flatness, moisture, and loose spots before a plank goes down, then sets transitions and base so the room is finished.",
                    },
                    {
                        q: "Is luxury vinyl a fit for a Madison kitchen?",
                        a: "It handles spills and humidity better than carpet, which is why it shows up in these kitchens. Roy still checks the slab or the wood subfloor for moisture before he installs it.",
                    },
                ],
            },
            "garage-floor-coating": {
                meta: "Red clay and oil stained into a Madison garage slab? Roy grinds it before any coating. Call (256) 221-0373.",
                intro: "Madison garage slabs see hot tires, oil drips, and red clay off the trucks. A coating fails when it is rolled onto concrete that was never ground or dried.",
                body: "Garage slabs in Madison take a beating from hot tires, oil drips and red clay tracked in on trucks. A coating only lasts if the concrete is prepared properly: grinding the surface, filling cracks and checking for moisture before epoxy is applied. Roy installs flake epoxy systems that are easier to clean and hide stains, and he explains cure time so you know when the garage is usable again.",
                faqs: [
                    {
                        q: "Why does a Madison garage floor coating peel?",
                        a: "The slab was sealed, oily, or damp, so the coating never bonded. Roy grinds the concrete, fills cracks, and checks moisture before epoxy goes down, then tells you when the garage can take a car again.",
                    },
                    {
                        q: "What does red clay do to a bare Madison garage slab?",
                        a: "It tracks in, stains the concrete, and sits in the pores. Roy gets that surface open and clean before a coating, or the clay line shows through later.",
                    },
                ],
            },
            "finish-carpentry": {
                meta: "Thin builder trim with open joints in Madison? Roy fits base, crown, and casing that closes the gaps. Call (256) 221-0373.",
                intro: "Builder trim in Madison is often thin, with nail holes that were never filled and joints that opened as the house settled. Taller base or crown changes the room without tearing it apart.",
                body: "Builder-grade trim in many Madison houses is thin and finished with visible nail holes and open joints. Upgrading to taller baseboards, crown molding, or a casing around a window changes how a room feels without a remodel. Roy measures, copes the joints where it matters, fills and caulks the nail holes, and leaves the trim ready to paint or already finished.",
                faqs: [
                    {
                        q: "Can Roy replace just the baseboard in a Madison room?",
                        a: "Yes. He measures the run, copes the inside corners, and fills the nail holes. The trim can be left ready to paint, or he can finish it if that is the job.",
                    },
                    {
                        q: "Why are the trim joints open in a newer Madison house?",
                        a: "The lumber and the drywall moved after the builder caulk gave up. Roy recuts or recaulks those joints so the gap does not show after paint.",
                    },
                ],
            },
            "fence-installation": {
                meta: "Madison fence posts leaning in wet clay? Roy resets the posts and braces the gate. Call (256) 221-0373.",
                intro: "Madison fence posts sit in clay that holds water. The boards can still look fine while the posts rot and the run starts to lean.",
                body: "A fence in Madison sits in clay soil that holds water, which is why posts rot and lean long before the boards do. Roy sets posts at the right depth for the fence height, spaces them consistently, and installs gates that are braced so they do not sag. If you have an existing fence, he repairs leaning sections and replaces rotted boards, not just the panels that look worst.",
                faqs: [
                    {
                        q: "Why do Madison fence posts lean before the boards fail?",
                        a: "Clay stays wet at the bottom of the post. Roy sets posts deep enough for the fence height and spaces them so one weak post does not pull the run.",
                    },
                    {
                        q: "What keeps a Madison gate from sagging?",
                        a: "A brace, and hinges on a post that is not already rotting. Roy braces the gate and replaces the post when the wood at the ground is soft.",
                    },
                ],
            },
            "deck-repair": {
                meta: "Soft boards on an older Madison deck? Roy checks the ledger, then replaces what failed. Call (256) 221-0373.",
                intro: "Decks built in the first years of a Madison subdivision are at the age when boards near the ground go soft and railings loosen. The surface stain is the last step, not the first.",
                body: "Many decks in Madison were built in the first years of the subdivision and are now due for attention: soft boards near the ground, loose railings, and a finish that has worn through. Roy probes the framing and ledger connection first, since that is what makes a deck safe, then replaces damaged boards, tightens or rebuilds railings, and refinishes the surface.",
                faqs: [
                    {
                        q: "What does Roy check before he replaces boards on a Madison deck?",
                        a: "The ledger where the deck meets the house, then the joists and posts. A new board on a rotten frame is not a repair. He says so if the frame is the problem.",
                    },
                    {
                        q: "Why do the lowest boards on a Madison deck fail first?",
                        a: "They stay wet after rain, close to the clay and the shade. Roy replaces the soft ones and refinishes the surface once the framing is sound.",
                    },
                ],
            },
            "pressure-washing": {
                meta: "Green algae on the north side of a Madison house? Roy washes each surface at the right pressure. Call (256) 221-0373.",
                intro: "North walls and shaded driveways in Madison grow a green film every humid summer. The siding, the concrete, and the wood deck are three different washes.",
                body: "Humid Madison summers grow green algae and mildew on north-facing siding, shaded driveways and wood decks. Roy uses the right pressure for the surface: soft washing for siding and roofs, higher pressure for concrete and walkways, and wood-safe settings for decks and fences. He pre-wets landscaping and rinses it afterward, and he points out spots, like failing caulk, that washing exposes.",
                faqs: [
                    {
                        q: "Why is the north side of a Madison house green?",
                        a: "It stays shaded and damp, so algae holds on the siding. Roy matches the wash to that surface and pre-wets the plants so the cleaner does not sit on them.",
                    },
                    {
                        q: "Can the same wash be used on a Madison driveway and a wood deck?",
                        a: "No. Concrete can take higher pressure. Deck boards cannot. Roy sets the pressure for the wood so the grain does not shred.",
                    },
                ],
            },
        },
    },
    "huntsville-al": {
        services: {
            "drywall-repair": {
                meta: "Plaster cracks in an older Huntsville house, or nail pops in a newer one? Roy matches the repair to the wall. Call (256) 221-0373.",
                intro: "Huntsville is not one kind of wall. Older houses still have plaster. Houses across central and west Huntsville, and the newer subdivisions to the south, are drywall, and the cracks there come from settling rather than from lath.",
                body: "Huntsville homes range from plaster-and-lath in older neighborhoods to modern drywall in new subdivisions, and the repair is different for each. In older houses Roy deals with cracked plaster and repairs that need to blend into uneven walls. In newer houses it is settling cracks, nail pops, and damage from moving furniture. He textures to match and primes before paint.",
                faqs: [
                    {
                        q: "How is a plaster crack in an older Huntsville house different from drywall?",
                        a: "Plaster is harder, and the wall behind it is uneven. Roy blends the patch into that surface instead of treating it like a flat drywall sheet. He tells you when the wall needs a different approach.",
                    },
                    {
                        q: "What causes nail pops in newer Huntsville drywall?",
                        a: "The house moves and the fastener lifts the mud. Roy resets it, coats it, matches the texture, and primes before paint.",
                    },
                ],
            },
            "interior-painting": {
                meta: "Bumpy paint over old plaster in Huntsville? Roy fixes the prep before the new coat. Call (256) 221-0373.",
                intro: "Older Huntsville rooms often have several coats of paint over patched plaster and heavy caulk lines. Newer rooms need less scraping and more attention to the thin builder coat that scuffs.",
                body: "Painting a Huntsville home often starts with the condition of what is under the paint. Older houses may have layers of previous coats, patched plaster, and trim with heavy caulk lines, so more prep is needed to get a smooth finish. Newer homes need less surface work and a better coat than the builder used. Roy scopes the prep with you before the first coat goes on.",
                faqs: [
                    {
                        q: "Why does paint look bumpy in an older Huntsville living room?",
                        a: "Previous patches and thick caulk are under the color. Roy scopes that prep with you before the first coat, because skipping it leaves the bumps in the new paint.",
                    },
                    {
                        q: "What is different about painting a newer Huntsville house?",
                        a: "The walls are flatter, so the work is patching dings and covering the builder paint. Roy still protects the floors and cuts the edges by hand.",
                    },
                ],
            },
            "exterior-painting": {
                meta: "Mildew on a shaded Huntsville wall? Roy deals with the damp wood, then paints. Call (256) 221-0373.",
                intro: "Huntsville exteriors split three ways: painted trim on brick ranches, older wood siding that needs scraping, and newer trim and doors. Hillside lots under trees stay damp, and that is where mildew and soft wood show up before a coat of paint.",
                body: "Huntsville's exterior painting depends on the house: brick ranches with painted trim and soffits, older wood-sided homes that need more scraping and priming, and newer fiber-cement or vinyl-trim houses where the focus is doors, shutters, and trim. Hillside and tree-covered lots stay damp longer, so Roy watches for mildew and wood rot before painting over anything.",
                faqs: [
                    {
                        q: "Can Roy paint over mildew on a shaded Huntsville wall?",
                        a: "No. He deals with the mildew and any soft wood first. Paint over either one fails, especially on a lot that stays damp under the trees.",
                    },
                    {
                        q: "What gets painted on a brick ranch in Huntsville?",
                        a: "The trim, soffits, doors, and shutters, not the brick. Roy scrapes the loose paint on that wood and primes the bare spots.",
                    },
                ],
            },
            "gutter-cleaning": {
                meta: "Hardwoods packing a Huntsville gutter every spring? Roy clears it and checks the pitch. Call (256) 221-0373.",
                intro: "Older Huntsville streets and the lots near Monte Sano have mature hardwoods. They fill gutters in the fall, then again with pollen and seed pods in the spring. A packed gutter is heavy, and the water comes down the fascia.",
                body: "Many Huntsville neighborhoods, especially older ones and those near Monte Sano, have mature hardwoods that fill gutters every fall and again with spring pollen and seed pods. Packed gutters are heavy, rust fasteners, and send water down the fascia. Roy cleans the troughs, flushes the downspouts, and checks the pitch. He tells you if something needs repair rather than only a cleaning.",
                faqs: [
                    {
                        q: "Why do Monte Sano gutters need more than a fall clean?",
                        a: "The trees drop again in spring. Roy clears the trough, flushes the downspout, and checks the pitch so water is not standing after the debris is gone.",
                    },
                    {
                        q: "What if a Huntsville gutter is rusty at the hangers?",
                        a: "Packed leaves hold water against the fasteners. Roy tells you when a section needs repair instead of only a cleaning. He does not scrape the rust and call the gutter fixed.",
                    },
                ],
            },
            "gutter-installation": {
                meta: "Hillside gutters in Huntsville dumping at the foundation? Roy sets the pitch and the outlets. Call (256) 221-0373.",
                intro: "Older Huntsville gutters were often patched in pieces, or the downspouts on a hillside dump water at the foundation. The run has to match the roof, and the water has to follow the grade.",
                body: "Older Huntsville homes often have gutters that were patched many times or were never sized for the roof's runoff. On hillside lots the downspouts need to carry water away from foundations and toward the grade, not into a neighbor's yard. Roy installs seamless gutters with enough downspouts for the roof area and reviews where the water ends up.",
                faqs: [
                    {
                        q: "Why do hillside gutters in Huntsville overflow at one end?",
                        a: "The pitch fights the slope of the lot, or there are not enough downspouts for the roof. Roy sets the pitch toward the outlets and checks where the water ends up on the grade.",
                    },
                    {
                        q: "What does Roy look at behind an old Huntsville gutter?",
                        a: "The fascia. Years of overflow soften that board. He flags rotten wood before a new gutter is hung on it.",
                    },
                ],
            },
            "flooring-installation": {
                meta: "Uneven floors in an older Huntsville house? Roy levels the subfloor before the new plank. Call (256) 221-0373.",
                intro: "Huntsville floors sit on different bases: a slab, plywood over joists, or old planks that are no longer flat. A plank installed over that, without a moisture check, telegraphs every dip.",
                body: "In Huntsville, flooring jobs often begin with what is under the old floor: slab, plywood over joists, or old planks. Older homes may have floors that are no longer flat, and slab-on-grade houses need a moisture check before anything goes down. Roy prepares the subfloor, installs LVP, laminate, or hardwood, and finishes transitions and trim so the new floor meets the old rooms cleanly.",
                faqs: [
                    {
                        q: "Why does flooring in an older Huntsville house need leveling first?",
                        a: "The original floor moved. Roy flattens the subfloor where it has to be flat, then installs the new floor and finishes the transitions into the next room.",
                    },
                    {
                        q: "What does Roy check on a Huntsville slab before vinyl goes down?",
                        a: "Moisture. A slab that is damp will loosen the floor. He checks it before any plank is laid.",
                    },
                ],
            },
            "garage-floor-coating": {
                meta: "A sealed or oily Huntsville garage slab? Roy grinds it so the coating can bond. Call (256) 221-0373.",
                intro: "Huntsville garage slabs run from older cracked concrete with oil stains to newer pours that still have a sealer on them. A coating sticks to a ground, clean slab and lets go of a dirty one.",
                body: "Garage slabs in Huntsville homes vary a lot in age and condition: hairline cracks, old oil stains, and sealer left from a previous coating. Epoxy bonds to a ground, clean slab and poorly to a sealed or dirty one, so preparation is the main job. Roy grinds, repairs cracks, and applies a flake epoxy system that resists hot tires and cleans up with a mop.",
                faqs: [
                    {
                        q: "Why won't a coating stick to a Huntsville garage that was sealed years ago?",
                        a: "The sealer is still there. Roy grinds it off, repairs the cracks, and then coats the open concrete. He tells you the cure time before you park on it.",
                    },
                    {
                        q: "Do oil stains in an older Huntsville garage stop a coating?",
                        a: "They will if they stay. Roy cleans and grinds those spots as part of the prep. A coating rolled over oil peels.",
                    },
                ],
            },
            "finish-carpentry": {
                meta: "Old Huntsville trim you cannot match at the store? Roy fits the profile or reworks the run. Call (256) 221-0373.",
                intro: "Trim in Huntsville's older houses is often a profile you cannot buy off the shelf. In newer houses the trim is plain, and the upgrade is base, crown, or wainscoting scribed to walls that are not square.",
                body: "Huntsville's older homes often have trim profiles that are hard to find today, and replacing a damaged section means matching the shape or reworking a whole run. In newer homes Roy adds baseboard, crown, and wainscoting to rooms that came with plain trim. He scribes to uneven walls and floors so joints stay tight in houses that are not perfectly square.",
                faqs: [
                    {
                        q: "Can Roy match a damaged piece of trim in an older Huntsville house?",
                        a: "He matches the profile when the shape is still available, and he tells you when the honest fix is to rework the whole run. One mismatched stick shows.",
                    },
                    {
                        q: "What does scribe mean on a Huntsville trim job?",
                        a: "The wall or floor is out of square, so Roy cuts the trim to follow it. That is how the joint stays tight in a house that has settled.",
                    },
                ],
            },
            "fence-installation": {
                meta: "A Huntsville fence gapping on a slope? Roy steps the panels to the grade. Call (256) 221-0373.",
                intro: "Huntsville yards go from flat subdivision lots to sloped ground. A fence that works on the flat will gap on a hill if the panels are not stepped or racked.",
                body: "Huntsville yards range from flat subdivision lots to sloped hillside property, and a fence on a slope needs a different layout from a flat run: stepped or racked panels, and posts set to hold against the pull of the grade. Roy also repairs existing fences, including leaning posts, broken rails, and gates that no longer latch.",
                faqs: [
                    {
                        q: "How does Roy build a fence on a Huntsville slope?",
                        a: "He steps or racks the panels to follow the grade and sets posts to hold the pull of the hill. A level panel on a slope leaves a gap underneath.",
                    },
                    {
                        q: "Can Roy fix a Huntsville gate that no longer latches?",
                        a: "Yes, when the post and the hinge are still sound. If the post is leaning, he deals with the post. Adjusting only the latch puts the problem off.",
                    },
                ],
            },
            "deck-repair": {
                meta: "A shaded Huntsville deck staying wet? Roy checks the frame, then the boards. Call (256) 221-0373.",
                intro: "Huntsville decks take sun, rain, and wide temperature swings. Decks on shaded or sloped lots stay wet longer, and that is where boards and rail posts go soft first.",
                body: "Decks in Huntsville see sun, rain, and wide temperature swings, and decks on shaded or sloped lots stay wet longer. Roy inspects the ledger, joists, and posts, replaces soft boards, secures or rebuilds railings, and refinishes the surface. If a deck is past repair he says so and explains what a rebuild involves.",
                faqs: [
                    {
                        q: "What does Roy inspect before staining a Huntsville deck?",
                        a: "The ledger, joists, and posts. Stain on soft wood hides the problem. He replaces what is soft, secures the railings, then refinishes.",
                    },
                    {
                        q: "When is a Huntsville deck past repair?",
                        a: "When the frame or the ledger is gone, not just the walking surface. Roy says so and explains what a rebuild involves. He does not nail new boards onto a failed frame.",
                    },
                ],
            },
            "pressure-washing": {
                meta: "Algae on a shaded Huntsville fence? Roy sets the pressure for wood, not for concrete. Call (256) 221-0373.",
                intro: "Shaded Huntsville lots grow algae on siding, fences, and walkways. Brick, vinyl, and older wood with failing caulk each need a different pressure. One setting for the whole house marks the soft surfaces.",
                body: "Shaded Huntsville lots grow algae and mildew on siding, roofs, fences, and walkways. Brick and vinyl are cleaned differently from wood, and an older house with failing paint or caulk needs a gentler approach than a recent build. Roy matches pressure to the surface, protects plants and windows, and points out damage that washing uncovers.",
                faqs: [
                    {
                        q: "Why did a previous wash mark the wood on a Huntsville fence?",
                        a: "The pressure was set for concrete. Roy keeps wood at a pressure that cleans it without tearing the grain, and he protects windows and plants.",
                    },
                    {
                        q: "What does washing reveal on an older Huntsville house?",
                        a: "Failed caulk and paint that the dirt was hiding. Roy points that out. The wash does not fix it.",
                    },
                ],
            },
        },
    },
    "athens-al": {
        services: {
            "drywall-repair": {
                meta: "Old patches showing on an Athens wall? Roy cuts out what failed and blends the repair. Call (256) 221-0373.",
                intro: "Athens houses near the square are older, and a lot of the drywall or plaster has been patched once already. East of town, toward Madison, the houses are newer and the cracks are from settling. An old window or roof leak shows up in both.",
                body: "Athens houses range from older homes near downtown to recent builds on the east side. Older houses can have plaster or drywall that has been patched before, and moisture from an old roof or window leak is a common cause of damage. Roy finds the source, cuts out what is damaged, patches, textures, and primes so it blends into the room.",
                faqs: [
                    {
                        q: "How does Roy repair drywall in an older Athens house that was patched before?",
                        a: "He cuts out what is soft or loose, including the old patch if it is failing, then textures and primes so the new work blends. Painting over the old patch leaves the bump.",
                    },
                    {
                        q: "What if an Athens ceiling stain is from an old leak?",
                        a: "Roy confirms the leak is finished before he opens the ceiling. Then he removes the damaged board, patches, and primes. A coat of paint on a wet cavity fails.",
                    },
                ],
            },
            "interior-painting": {
                meta: "High ceilings and tired trim paint in Athens? Roy preps the edges, then paints. Call (256) 221-0373.",
                intro: "Older Athens rooms often have high ceilings and trim with layers of old paint, so the time is in the edges and the prep. Newer houses east of town need fewer repairs and a cleaner cut-in.",
                body: "Older Athens homes often have high ceilings, detailed trim, and layers of old paint, which means careful prep and more time on trim and edges. Newer homes need less repair. Either way Roy patches, caulks, and primes before painting, and he agrees on colors and sheens with you before he starts.",
                faqs: [
                    {
                        q: "Why does interior painting take longer in an older Athens house?",
                        a: "High ceilings and detailed trim mean more edge work, and failed paint has to come off. Roy patches, caulks, and primes before the color, and he agrees on sheen with you first.",
                    },
                    {
                        q: "What does Roy do differently in a newer Athens subdivision?",
                        a: "Less repair, same prep. He still fills holes and caulks trim. The walls are flatter, so the job moves faster.",
                    },
                ],
            },
            "exterior-painting": {
                meta: "Peeling siding or a bare porch rail in Athens? Roy scrapes, primes, and coats the dry wood. Call (256) 221-0373.",
                intro: "Athens exterior work includes older wood siding that needs scraping, brick houses where the trim is the paint job, and larger lots with porches and detached shops. South-facing rails and sills fail first.",
                body: "Exterior painting in Athens includes older wood-sided homes that need scraping and priming, brick houses with painted trim, and larger lots with porches, detached garages, and workshops. Weather is hard on south-facing walls and on horizontal surfaces such as porch rails and sills. Roy preps those surfaces and uses exterior paint suited to that exposure.",
                faqs: [
                    {
                        q: "Does Roy paint porches and detached shops in Athens, or only the house?",
                        a: "Both, when they are part of the job. Horizontal rails and sills take more water than a wall, so he preps those before he coats them.",
                    },
                    {
                        q: "What fails first on an older wood-sided house in Athens?",
                        a: "Loose paint and soft wood on the sunny side. Roy scrapes, primes bare wood, and does not paint over rot.",
                    },
                ],
            },
            "gutter-cleaning": {
                meta: "Tree debris and roof grit in an Athens gutter? Roy clears it and flushes the outlet. Call (256) 221-0373.",
                intro: "Mature trees around older Athens neighborhoods drop a heavy load into the gutters, and older roofs send grit with it. A trough can look clear and still hold water if the pitch is off.",
                body: "Athens' mature neighborhoods have large trees that drop a lot into gutters, and homes with older shingle roofs send grit and debris into the troughs. Roy cleans the gutters, flushes the downspouts, and checks for loose hangers, sagging runs, and standing water that points to a pitch problem.",
                faqs: [
                    {
                        q: "What does Roy check after he cleans an Athens gutter?",
                        a: "He flushes the downspout and looks for loose hangers, a sag, and standing water. Taking the leaves out does not fix a run that still holds water.",
                    },
                    {
                        q: "Why do older Athens roofs fill gutters with grit?",
                        a: "Shingles shed granules, and the grit packs the bottom of the trough. Roy clears that, not only the leaves on top.",
                    },
                ],
            },
            "gutter-installation": {
                meta: "An Athens porch roof with no gutter? Roy adds a run that moves water off the walk. Call (256) 221-0373.",
                intro: "Athens properties often have long rooflines over porches, additions, and detached garages. Those are the runs where gutters were never put up or have already failed. Water off that roof lands on the walk or against the foundation.",
                body: "Many Athens properties have long rooflines over porches, additions, and detached garages, which is where gutters often go missing or fail. Roy installs seamless gutters sized for the roof, with downspouts placed so water drains away from foundations and walkways, rather than pooling beside the building.",
                faqs: [
                    {
                        q: "Why do Athens porch roofs splash where people walk?",
                        a: "The porch roof dumps water at the steps, and many of those roofs have no gutter. Roy sizes the gutter to that roof and places the downspout so the water leaves the walk and the foundation.",
                    },
                    {
                        q: "What does Roy look at before hanging gutters on an Athens outbuilding?",
                        a: "The fascia and the slope away from the building. A gutter on a rotten board, dumping at the slab, does not protect the shop.",
                    },
                ],
            },
            "flooring-installation": {
                meta: "An uneven wood floor in an older Athens house? Roy levels it before the new flooring. Call (256) 221-0373.",
                intro: "Athens flooring jobs split between older houses with wood subfloors that have gone uneven and newer houses on a slab. The plank is the last step in both.",
                body: "Flooring work in Athens includes older homes with wood subfloors that may be uneven, and newer homes on a slab. Roy checks the subfloor and the moisture, levels where needed, and installs LVP, laminate, or hardwood. Transitions, baseboards, and door undercuts are part of the job so the finished floor sits right.",
                faqs: [
                    {
                        q: "Can Roy install flooring over an uneven wood floor in an older Athens house?",
                        a: "He levels where the floor needs it and checks moisture first. A new floor laid over a dip will flex and open at the joints.",
                    },
                    {
                        q: "What is different about a slab in a newer Athens house?",
                        a: "Moisture comes from the concrete, not from a crawlspace. Roy checks it before the floor goes down, and he undercuts doors so the new floor clears.",
                    },
                ],
            },
            "garage-floor-coating": {
                meta: "A cracked Athens shop slab? Roy grinds and fills it before the coating. Call (256) 221-0373.",
                intro: "A lot of Athens houses have a garage or a detached shop that takes vehicles and equipment, not just a parked car. The slab is dirty, cracked, and sometimes damp. That is the work before any coating.",
                body: "Athens homes often have larger garages and detached shops that see heavy use. Epoxy lasts when the slab is ground and cleaned first, so Roy prepares the surface, repairs cracks, and applies a flake epoxy system. It stands up to vehicles and equipment and is easier to clean than bare concrete.",
                faqs: [
                    {
                        q: "Why prep an Athens shop slab before a coating?",
                        a: "The use is heavy, and the cracks are often wide. Roy grinds, repairs the cracks, and confirms the slab is ready before epoxy. He tells you the cure time so equipment stays off it.",
                    },
                    {
                        q: "What makes a coating fail in an Athens garage?",
                        a: "It was applied over dust, oil, or a sealed surface. Roy grinds to clean concrete. That bond is the repair.",
                    },
                ],
            },
            "finish-carpentry": {
                meta: "Trim that will not sit tight in an older Athens room? Roy scribes it to the wall. Call (256) 221-0373.",
                intro: "In older Athens houses, finish carpentry is matching trim and casings in rooms that are not square. In newer houses it is adding the base, crown, or casing the builder left off.",
                body: "In Athens' older homes, finish carpentry means repairing or matching existing trim, repairing casings, and installing built-ins that fit rooms that are not perfectly square. In newer homes it is adding trim detail to plain rooms. Roy measures carefully and scribes to walls and floors for tight joints.",
                faqs: [
                    {
                        q: "Can Roy match casing in an older Athens room?",
                        a: "He matches it when the profile can be matched, and he scribes to the wall so the joint is tight. He tells you when one stick cannot blend into the old run.",
                    },
                    {
                        q: "What trim did newer Athens houses come without?",
                        a: "Taller base and crown. The walls came plain. Roy measures and installs that trim, and he fills the nail holes so it is ready to paint.",
                    },
                ],
            },
            "fence-installation": {
                meta: "A long Athens fence leaning at the gate? Roy resets the posts and braces the corner. Call (256) 221-0373.",
                intro: "Athens lots are often longer than a city lot, so the fence is a long run of posts, not a short panel job. The posts, the corners, and the gate are where a long fence fails.",
                body: "Larger Athens lots mean longer fence runs, and the strength of a long fence is in the posts, so Roy pays attention to depth, spacing, and bracing at corners and gates. Fences for pets, privacy or pasture edges are built differently, and he asks what the fence needs to do before he plans it. He also repairs leaning or damaged existing fences.",
                faqs: [
                    {
                        q: "Why do long Athens fence runs lean at the corners?",
                        a: "The corner and the gate take the load, and a shallow post in wet ground gives up. Roy sets the depth and the bracing there, not only in the middle of the run.",
                    },
                    {
                        q: "What does Roy need to know before a fence on a larger Athens lot?",
                        a: "What the fence has to do, and where your line is. He repairs leaning sections too. He does not pick the property line for you.",
                    },
                ],
            },
            "deck-repair": {
                meta: "Loose railings on a large Athens deck? Roy checks the frame, then rebuilds the rail. Call (256) 221-0373.",
                intro: "Decks on Athens properties are often large and used hard. Railings loosen, and boards soften where water sits. Stain is not the inspection.",
                body: "Decks on Athens properties are often large and heavily used, with railings that loosen over time and boards that soften where water sits. Roy checks the framing, ledger, and posts, replaces damaged boards, secures the railings, and refinishes the surface to protect it from the weather.",
                faqs: [
                    {
                        q: "What does Roy check on a large Athens deck before he replaces boards?",
                        a: "Framing, ledger, and posts. A wide deck hides a soft joist under one bad board. He replaces the damaged boards and secures the railings after the frame is sound.",
                    },
                    {
                        q: "Why do Athens deck railings loosen?",
                        a: "The posts take weather and people leaning on them. Roy secures or rebuilds the railing. Tightening one screw on a rotten post is not a repair.",
                    },
                ],
            },
            "pressure-washing": {
                meta: "One wash scarring an Athens porch and driveway? Roy changes the pressure for each surface. Call (256) 221-0373.",
                intro: "An Athens place can have siding, a long driveway, a porch, a fence, and a shop. Each surface wants a different pressure. One setting for all of it marks the wood and the paint.",
                body: "Larger Athens properties have a lot of surface to wash: siding, long driveways, porches, fences, and outbuildings. Different surfaces need different pressure, so Roy soft washes siding and roofs, uses stronger settings on concrete, and keeps wood at a safe pressure. He protects plants and windows and rinses everything off at the end.",
                faqs: [
                    {
                        q: "How does Roy wash a long Athens driveway without treating the siding the same way?",
                        a: "Concrete takes a stronger wash. Siding does not. He changes the setup between surfaces and rinses plants and windows when he is done.",
                    },
                    {
                        q: "What does a wash show on an older Athens porch?",
                        a: "Bare wood and failed caulk the grime was covering. Roy points it out. The wash does not replace that prep.",
                    },
                ],
            },
        },
    },
    "decatur-al": {
        services: {
            "drywall-repair": {
                meta: "Soft drywall from humidity in an older Decatur house? Roy removes what failed and patches it. Call (256) 221-0373.",
                intro: "Older Decatur houses often mix plaster, remodel drywall, and patches that have been painted several times. River humidity and old leaks leave stains and soft spots in that mix.",
                body: "Older Decatur homes often have a mix of plaster, drywall added during remodels, and patches that have been painted over several times. Humidity and old leaks leave stains and soft spots. Roy finds the cause of the damage, repairs or replaces what is compromised, and textures and primes so the patch blends into the wall.",
                faqs: [
                    {
                        q: "How does Roy repair a Decatur wall that is part plaster and part drywall?",
                        a: "He matches the repair to the material that is there. Plaster and drywall do not finish the same. He textures and primes so the patch blends instead of showing through.",
                    },
                    {
                        q: "What if a Decatur ceiling is soft from an old leak?",
                        a: "He confirms the leak is finished, removes what is compromised, and rebuilds that spot. Painting a soft ceiling hides it until the next humid week.",
                    },
                ],
            },
            "interior-painting": {
                meta: "Failed trim paint in Old Decatur? Roy scrapes it before the new coat goes on. Call (256) 221-0373.",
                intro: "In Old Decatur and Albany, interior paint starts with cracked plaster and trim paint that has already failed. Mid-century and newer rooms need less of that repair and a better coat than the one on the wall now.",
                body: "In Decatur's older neighborhoods, interior painting means careful prep: repairing cracked plaster, scraping failed paint on trim, and caulking gaps so the finish looks clean. Mid-century and newer homes need less prep and a better coat than the original. Roy goes over color and sheen with you before starting.",
                faqs: [
                    {
                        q: "Why scrape trim in an older Decatur house before painting?",
                        a: "Failed paint on the trim shows through and then peels. Roy scrapes it, caulks the gaps, and then paints. He goes over color and sheen with you before he opens a can.",
                    },
                    {
                        q: "Do newer Decatur houses skip prep?",
                        a: "No. They need less of it. Roy still fills holes and cuts clean lines. A new coat over dirt and scuffs fails the same way the old one did.",
                    },
                ],
            },
            "exterior-painting": {
                meta: "Porch paint peeling in Decatur's damp air? Roy replaces the rot, then primes and paints. Call (256) 221-0373.",
                intro: "Decatur sits on the Tennessee River, and that humidity keeps trim, porches, and siding damp. Paint lets go sooner here. Older wood-sided houses in the historic districts are a regular part of this work.",
                body: "River humidity keeps wood damp longer in Decatur, so exterior paint on trim, porches, and siding fails sooner than it would in a drier place. Roy scrapes and sands loose paint, replaces rotted boards before painting, and primes bare wood so the new coat bonds. Older wood-sided homes in the historic districts are a regular part of this work.",
                faqs: [
                    {
                        q: "Why does exterior paint fail faster on a Decatur porch?",
                        a: "The wood stays damp. Roy scrapes loose paint, replaces rotted boards, and primes bare wood so the new coat has something to hold. He does not paint over rot.",
                    },
                    {
                        q: "What is different about painting wood siding in Old Decatur?",
                        a: "The siding is older, and the prep is most of the job. Roy deals with soft boards before color. Paint on rotten wood comes off with the next wet season.",
                    },
                ],
            },
            "gutter-cleaning": {
                meta: "A Decatur gutter overflowing down the fascia? Roy clears it and checks the wood behind it. Call (256) 221-0373.",
                intro: "Older Decatur neighborhoods have mature trees, and a clogged gutter on an older house sends water down the fascia and into the wall. The leaves are only the visible part.",
                body: "Older Decatur neighborhoods have mature trees that fill gutters, and clogged gutters on older homes send water down fascia boards and into wall cavities. Roy cleans the troughs, flushes the downspouts, checks for rot on the fascia behind the gutter, and tells you if something needs repair.",
                faqs: [
                    {
                        q: "What does Roy look for behind a Decatur gutter while cleaning it?",
                        a: "Rot on the fascia, and a downspout that is not actually open. He flushes the downspout and tells you if the wood or the gutter needs repair.",
                    },
                    {
                        q: "Why do Decatur gutters overflow onto the siding?",
                        a: "They are packed, or the pitch holds water. Roy clears the trough and checks that water leaves. Overflow down an old wall is how the cavity gets wet.",
                    },
                ],
            },
            "gutter-installation": {
                meta: "Decatur downspouts stopping at the foundation? Roy moves the water away from the house. Call (256) 221-0373.",
                intro: "Older Decatur gutters were often added later or patched, and the downspouts stop too close to the foundation. River humidity makes that wet line at the slab a bigger problem than it looks from the street.",
                body: "Older homes in Decatur often have gutters that were added or patched over time, with downspouts that do not move water far enough from the foundation. Roy installs seamless gutters, sized for the roof, with downspouts placed to carry water away. He also checks the fascia boards behind the old gutters and flags rot before the new ones go up.",
                faqs: [
                    {
                        q: "Why does Roy check the fascia before new gutters in Decatur?",
                        a: "The old gutter was holding water against that board. He flags rot before the new gutter goes up. Hanging on soft wood pulls out.",
                    },
                    {
                        q: "Where should a Decatur downspout discharge?",
                        a: "Far enough from the foundation that the water does not sit against the house. Roy places the outlets for that, not only for how the front looks.",
                    },
                ],
            },
            "flooring-installation": {
                meta: "A damp crawlspace under a Decatur floor? Roy checks moisture before he installs. Call (256) 221-0373.",
                intro: "Flooring in Decatur's older houses often means an uneven wood subfloor and a crawlspace that stays damp. Humidity here decides whether the new floor stays put.",
                body: "Flooring jobs in Decatur's older homes frequently involve uneven wood subfloors and crawlspaces where moisture is a concern. Roy checks the subfloor and moisture conditions before installing LVP, laminate, or hardwood, levels where needed, and finishes transitions and trim. Humid conditions make that moisture check a real part of the job here.",
                faqs: [
                    {
                        q: "What does Roy check under an older Decatur floor?",
                        a: "The subfloor and the moisture. He levels where the floor needs it before the new floor goes down, and he finishes transitions and trim so the new floor meets the old rooms.",
                    },
                    {
                        q: "Why does a Decatur crawlspace matter for a new floor?",
                        a: "It holds damp air under the floor. Roy checks that condition before he installs. A dry-looking room can still have a wet subfloor.",
                    },
                ],
            },
            "garage-floor-coating": {
                meta: "Humidity lifting a coating off a Decatur garage? Roy preps the slab so the coating can bond. Call (256) 221-0373.",
                intro: "Decatur garage slabs take humidity plus oil and hot tires. A coating on a damp or dirty slab lets go. The prep is the work.",
                body: "Garage floors in Decatur homes face humidity, oil, and tire marks. Epoxy needs a clean, ground, dry slab to bond, so Roy prepares the surface, repairs cracks, and applies a flake epoxy system that resists stains and cleans easily. He explains cure time so you know when you can park again.",
                faqs: [
                    {
                        q: "Why does humidity affect a Decatur garage floor coating?",
                        a: "Moisture in the slab breaks the bond. Roy grinds, repairs cracks, and coats when the surface is ready. He tells you when you can park again.",
                    },
                    {
                        q: "What do tire marks on a Decatur garage tell Roy?",
                        a: "Hot tires and oil have been sitting on bare concrete. He cleans and opens that surface before epoxy. Coating over the stain traps it, then the coat peels.",
                    },
                ],
            },
            "finish-carpentry": {
                meta: "Decatur trim that does not match the old profile? Roy reproduces the run, or tells you if he cannot. Call (256) 221-0373.",
                intro: "Older Decatur trim profiles are hard to match, so a repair often means reproducing the shape of the run rather than swapping in a modern stick. Newer rooms are the opposite: plain walls that need base, crown, and casing.",
                body: "Older Decatur homes have trim profiles and casings that are hard to match, and repairs often require reproducing the original shape. In newer homes Roy adds baseboard, crown, and casing to rooms with plain trim. He scribes to walls and floors that are out of square for tight joints.",
                faqs: [
                    {
                        q: "Can Roy match trim in an older Decatur house?",
                        a: "When the profile can be reproduced, he does. When it cannot, he tells you and reworks the run so you are not left with one odd piece. He scribes to walls that are out of square.",
                    },
                    {
                        q: "What carpentry do newer Decatur rooms come without?",
                        a: "Baseboard, crown, and casing the builder kept plain. Roy installs it tight to floors and walls that are not perfectly straight.",
                    },
                ],
            },
            "fence-installation": {
                meta: "Fence posts rotting at the soil in Decatur? Roy sets new posts in that damp ground. Call (256) 221-0373.",
                intro: "Decatur soil stays damp, and fence posts rot at the ground while the pickets still look fine. Older neighborhoods also have fence lines that are easy to misread from the yard.",
                body: "Fences in Decatur sit in soil that stays damp, which hastens post rot, so post depth and a solid set matter. Roy builds privacy and picket fences, sets braced gates, and repairs leaning or rotted sections of existing fences. Property lines in older neighborhoods can be unclear, so he recommends confirming yours before installation.",
                faqs: [
                    {
                        q: "Why do Decatur fence posts rot at the soil line?",
                        a: "The ground stays wet. Roy sets posts deep and solid, and he replaces posts that are already soft instead of screwing new boards to them.",
                    },
                    {
                        q: "What should you confirm before a new fence in an older Decatur neighborhood?",
                        a: "The property line. Roy recommends you confirm it before he sets posts. He builds the fence and braces the gates. He does not decide the line.",
                    },
                ],
            },
            "deck-repair": {
                meta: "A Decatur deck staying soft in the humidity? Roy checks the ledger before he refinishes. Call (256) 221-0373.",
                intro: "River humidity keeps Decatur decks damp, so boards soften, rail posts rot, and the finish gives up. Stain over that damage is a cover, not a repair.",
                body: "Humidity keeps decks damp in Decatur, so soft boards, rotted rail posts, and failing finish are common. Roy checks the framing and ledger connection, replaces damaged boards, secures the railings, and refinishes the surface. If rot has gone too far to repair, he tells you what a rebuild would involve.",
                faqs: [
                    {
                        q: "What does Roy check on a damp Decatur deck?",
                        a: "The framing and the ledger, then the boards and the rail posts. He replaces what is soft, secures the railings, and refinishes after the structure is sound.",
                    },
                    {
                        q: "When will Roy say a Decatur deck needs a rebuild?",
                        a: "When rot has gone through the frame, not just the walking surface. He explains what that rebuild involves. He does not coat a failed deck and leave it.",
                    },
                ],
            },
            "pressure-washing": {
                meta: "Algae on damp Decatur siding? Roy washes it without driving water behind the wall. Call (256) 221-0373.",
                intro: "Decatur humidity grows algae on siding, decks, and walkways. Older houses with failing caulk or loose paint need a gentler wash than a newer hard surface.",
                body: "Decatur's humidity grows algae and mildew on siding, decks, and walkways. Roy uses soft washing on siding and roofs, higher pressure on concrete, and wood-safe settings on decks and fences. Older homes with failing caulk or paint get a gentler approach, and he points out any damage the washing reveals.",
                faqs: [
                    {
                        q: "Why is algae so common on Decatur siding?",
                        a: "The air stays damp, and shaded walls do not fully dry. Roy washes those surfaces at a pressure that cleans them without driving water behind the siding.",
                    },
                    {
                        q: "What does Roy do when a Decatur house has peeling paint?",
                        a: "He eases off. A hard wash on failed paint strips more of it. He points out the damage the wash uncovers so you know what the paint job actually is.",
                    },
                ],
            },
        },
    },
};
