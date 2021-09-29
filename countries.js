let can = {
    id: "CAN",
    visited: false,
    neighbors: [],
    previous: null
}

let usa = {
    id: "USA",
    visited: false,
    neighbors: [],
    previous: null
}

let mex = {
    id: "MEX",
    visited: false,
    neighbors: [],
    previous: null
}

let blz = {
    id: "BLZ",
    visited: false,
    neighbors: [],
    previous: null
}

let gtm = {
    id: "GTM",
    visited: false,
    neighbors: [],
    previous: null
}

let slv = {
    id: "SLV",
    visited: false,
    neighbors: [],
    previous: null
}

let hnd = {
    id:"HND",
    visited: false,
    neighbors: [],
    previous: null
}

let nic = {
    id: "NIC",
    visited: false,
    neighbors: [],
    previous: null
}

let cri = {
    id: "CRI",
    visited: false,
    neighbors: [],
    previous: null
}

let pan = {
    id: "PAN",
    visited: false,
    neighbors: [],
    previous: null
}

can.neighbors = [usa];
usa.neighbors = [can, mex];
mex.neighbors = [usa, gtm, blz];
blz.neighbors = [mex, gtm];
gtm.neighbors = [mex, blz, slv, hnd];
slv.neighbors = [gtm, hnd];
hnd.neighbors = [slv, gtm, nic];
nic.neighbors = [hnd, cri];
cri.neighbors = [nic, pan];
pan.neighbors = [cri];

module.exports = {can, usa, mex, blz, gtm, slv, hnd, nic, cri, pan};